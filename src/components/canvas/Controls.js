export default class Controls {
    constructor(ctx, canvas, initialOriginX, initialOriginY, canvasWidth, canvasHeight) {
        this.zoomIntensity = 0.2

        this.ctx = ctx
        this.canvas = canvas

        this.isDragging = false
        this.origX = initialOriginX
        this.origY = initialOriginY
        this.zoomLevel = 0
        this.scale = 1
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
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
        this.ctx.translate(this.origX - targetX, this.origY - targetY)

        this.origX = targetX
        this.origY = targetY
    }

    onMouseDown(event) {
        this.dragX = event.offsetX
        this.dragY = event.offsetY
        this.isDragging = true
    }

    onMouseLeave() {
        this.isDragging = false
    }

    onMouseMove(event) {
        if (this.isDragging) {
            this.handleMouseMoveForDimension(event, 'X');
            this.handleMouseMoveForDimension(event, 'Y');
        }
    }

    handleMouseMoveForDimension(event, dimension) {
        const isX = dimension === 'X';
        const canvasLength = isX ? this.canvas.width : this.canvas.height
        const scaledCanvasLength = (isX ? this.canvasWidth : this.canvasHeight) / this.scale
        const notAtLowerBounds = this[`orig${dimension}`] !== 0
        const notAtUpperBounds = this[`orig${dimension}`] + scaledCanvasLength !== canvasLength
        const offset = event[`offset${dimension}`]
        let draggedAmount = (this[`drag${dimension}`] - offset) * (this.zoomLevel === 0 ? 1 : this.zoomLevel < 0 ? -this.zoomLevel : 1 / this.zoomLevel)

        if (notAtLowerBounds && notAtUpperBounds || !notAtLowerBounds && draggedAmount > 0 || !notAtUpperBounds && draggedAmount < 0) {
            let newOrig = this[`orig${dimension}`] + draggedAmount;
            if (newOrig < 0) {
                draggedAmount = -this[`orig${dimension}`]
            } else if (newOrig + scaledCanvasLength > canvasLength) {
                draggedAmount = canvasLength - this[`orig${dimension}`] - scaledCanvasLength
            }

            this.ctx.translate(isX ? -draggedAmount : 0, dimension === 'Y' ? -draggedAmount : 0)
            this[`orig${dimension}`] += draggedAmount
            this[`drag${dimension}`] = offset
        }
    }

    onMouseUp() {
        this.isDragging = false
    }

    zoomAt(event) {
        const x = event.offsetX
        const y = event.offsetY
        const scroll = event.deltaY < 0 ? 1 : -1

        this.zoomLevel += scroll

        const zoom = Math.exp(scroll * this.zoomIntensity)

        if (this.zoomLevel < -5) {
            this.zoomLevel += 1
        } else if (this.zoomLevel > 5) {
            this.zoomLevel -= 1
        } else {
            this.ctx.translate(this.origX, this.origY)

            this.origX -= x / (this.scale * zoom) - x / this.scale
            this.origY -= y / (this.scale * zoom) - y / this.scale

            if (this.origX < 0) {
                this.origX = 0
            } else {
                let scaledCanvasWidth = this.canvasWidth / (this.scale * zoom);
                if (this.origX + scaledCanvasWidth > this.canvas.width) {
                    this.origX = this.canvas.width - scaledCanvasWidth
                }
            }

            if (this.origY < 0) {
                this.origY = 0
            } else {
                let scaledCanvasHeight = this.canvasHeight / (this.scale * zoom);
                if (this.origY + scaledCanvasHeight > this.canvas.height) {
                    this.origY = this.canvas.height - scaledCanvasHeight
                }
            }

            this.ctx.scale(zoom, zoom)
            this.ctx.translate(-this.origX, -this.origY)

            this.scale *= zoom
        }
    }

}
