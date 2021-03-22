export default class Controls {
    constructor(primaryCanvas, backgroundCanvasList, htmlWidth, htmlHeight) {
        this.zoomIntensity = 0.2

        this.origX = 0
        this.origY = 0

        this.primaryCanvas = primaryCanvas
        this.primaryCtx = primaryCanvas.getContext('2d')

        this.backgroundCanvasList = backgroundCanvasList

        this.isDragging = false
        this.dragOffsetX = 0
        this.dragOffsetY = 0
        this.draggingBackLockedX = false
        this.draggingBackLockedY = false
        this.draggingForwardsLockedX = false
        this.draggingForwardsLockedY = false

        this.htmlWidth = htmlWidth
        this.htmlHeight = htmlHeight

        this.zoomLevel = 0
        this.scale = 1
    }

    getCurrentScale() {
        return this.scale
    }

    getCurrentOrigX() {
        return this.origX
    }

    getCurrentOrigY() {
        return this.origY
    }

    scrollToOrig(targetX, targetY) {
        const dx = this.origX - targetX
        const dy = this.origY - targetY

        this.primaryCtx.translate(dx, dy)
        this.origX = targetX
        this.origY = targetY

        this.backgroundCanvasList.forEach((backgroundCanvasInfo) => {
            const backgroundCtx = backgroundCanvasInfo.canvas.getContext('2d')

            backgroundCtx.translate(dx * backgroundCanvasInfo.parallax, dy * backgroundCanvasInfo.parallax)
            backgroundCanvasInfo.origX = targetX * backgroundCanvasInfo.parallax
            backgroundCanvasInfo.origY = targetY * backgroundCanvasInfo.parallax

        })
    }

    onMouseDown(event) {
        this.isDragging = true
        this.dragOffsetX = event.offsetX
        this.dragOffsetY = event.offsetY
    }

    onMouseLeave() {
        this.isDragging = false
        this.dragOffsetX = 0
        this.dragOffsetY = 0
    }

    onMouseMove(event) {
        if (this.isDragging) {
            this.handleMouseMoveForDimension(event, 'X');
            this.handleMouseMoveForDimension(event, 'Y');
        }
    }

    handleMouseMoveForDimension(event, dimension) {
        const isX = dimension === 'X';
        const offset = event[`offset${dimension}`];

        let draggedAmount = (this[`dragOffset${dimension}`] - offset) * (this.zoomLevel === 0 ? 1 : this.zoomLevel < 0 ? -this.zoomLevel / 2 : (1 / this.zoomLevel) * 2)

        const scaledCanvasLength = (isX ? this.htmlWidth : this.htmlHeight) / this.scale
        const canvasLength = isX ? this.primaryCanvas.width : this.primaryCanvas.height

        const isDraggingBack = draggedAmount < 0

        if (!this[`draggingBackLocked${dimension}`] ||
            !this[`draggingForwardsLocked${dimension}`] ||
            this[`draggingBackLocked${dimension}`] && !isDraggingBack ||
            this[`draggingForwardsLocked${dimension}`] && isDraggingBack) {
            const newOrig = this[`orig${dimension}`] + draggedAmount
            if (newOrig < 0) {
                this[`draggingBackLocked${dimension}`] = true
                draggedAmount = -this[`orig${dimension}`]
            } else {
                this[`draggingBackLocked${dimension}`] = false
            }

            if (newOrig + scaledCanvasLength > canvasLength) {
                this[`draggingForwardsLocked${dimension}`] = true
                draggedAmount = canvasLength - this[`orig${dimension}`] - scaledCanvasLength
            } else {
                this[`draggingForwardsLocked${dimension}`] = false
            }

            this.primaryCtx.translate(isX ? -draggedAmount : 0, isX ? 0 : -draggedAmount)
            this[`orig${dimension}`] += draggedAmount

            this.backgroundCanvasList.forEach((backgroundCanvasInfo) => {
                const backgroundCtx = backgroundCanvasInfo.canvas.getContext('2d')
                if (backgroundCanvasInfo[`orig${dimension}`] + draggedAmount >= 0 && !backgroundCanvasInfo[`orig${dimension}`] + draggedAmount + scaledCanvasLength <= canvasLength) {
                    backgroundCtx.translate(isX ? -draggedAmount * backgroundCanvasInfo.parallax : 0, isX ? 0 : -draggedAmount * backgroundCanvasInfo.parallax)
                    backgroundCanvasInfo[`orig${dimension}`] += draggedAmount * backgroundCanvasInfo.parallax
                }
            })

            this[`dragOffset${dimension}`] = offset
        }
    }

    onMouseUp() {
        this.isDragging = false
        this.dragOffsetX = 0
        this.dragOffsetY = 0
    }

    zoomAt(event) {
        const x = event.offsetX
        const y = event.offsetY
        const scroll = event.deltaY < 0 ? 1 : -1

        const ctx = this.primaryCanvas.getContext('2d')

        this.zoomLevel += scroll


        if (this.zoomLevel < -5) {
            this.zoomLevel += 1
        } else if (this.zoomLevel > 5) {
            this.zoomLevel -= 1
        } else {
            ctx.translate(this.origX, this.origY)

            const zoom = Math.exp(scroll * this.zoomIntensity)
            const {newOrigX, newOrigY} = this.scaleOrig(x, y, zoom, this.origX, this.origY, this.primaryCanvas, this.scale, 1);

            this.origX = newOrigX
            this.origY = newOrigY

            ctx.scale(zoom, zoom)
            ctx.translate(-this.origX, -this.origY)

            this.scale *= zoom

            this.backgroundCanvasList.forEach(backgroundCanvasInfo => {
                const backgroundCtx = backgroundCanvasInfo.canvas.getContext('2d')

                backgroundCtx.translate(backgroundCanvasInfo.origX, backgroundCanvasInfo.origY)

                const backgroundZoom = Math.exp(scroll * this.zoomIntensity * backgroundCanvasInfo.parallax)
                const {newOrigX, newOrigY} = this.scaleOrig(x, y, zoom, backgroundCanvasInfo.origX, backgroundCanvasInfo.origY, backgroundCanvasInfo.canvas, backgroundCanvasInfo.scale, backgroundCanvasInfo.parallax);

                backgroundCanvasInfo.origX = newOrigX
                backgroundCanvasInfo.origY = newOrigY

                backgroundCtx.scale(backgroundZoom, backgroundZoom)
                backgroundCtx.translate(-backgroundCanvasInfo.origX, -backgroundCanvasInfo.origY)

                backgroundCanvasInfo.scale *= backgroundZoom
            })

        }
    }

    scaleOrig(x, y, zoom, origX, origY, canvas, scale, parallax) {
        let newOrigX = origX - (x / (scale * zoom) - x / scale) * parallax
        let newOrigY = origY - (y / (scale * zoom) - y / scale) * parallax

        if (newOrigX < 0) {
            newOrigX = 0
        } else {
            let scaledCanvasWidth = this.htmlWidth / (scale * zoom);
            if (newOrigX + scaledCanvasWidth > canvas.width) {
                newOrigX = canvas.width - scaledCanvasWidth
            }
        }

        if (newOrigY < 0) {
            newOrigY = 0
        } else {
            let scaledCanvasHeight = this.htmlHeight / (scale * zoom);
            if (newOrigY + scaledCanvasHeight > canvas.height) {
                newOrigY = canvas.height - scaledCanvasHeight
            }
        }

        return {newOrigX, newOrigY}
    }
}
