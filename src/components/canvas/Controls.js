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
        this.dragX = event.clientX - this.canvas.parentNode.getBoundingClientRect().left
        this.dragY = event.clientY - this.canvas.parentNode.getBoundingClientRect().top
        this.isDragging = true
    }

    onMouseMove(event) {
        if (this.isDragging) {
            const x = event.clientX - this.canvas.parentNode.getBoundingClientRect().left
            const y = event.clientY - this.canvas.parentNode.getBoundingClientRect().top

            let draggedAmountX = (this.dragX - x) * (this.zoomLevel === 0 ? 1 : this.zoomLevel < 0 ? -this.zoomLevel : 1 / this.zoomLevel)
            let draggedAmountY = (this.dragY - y) * (this.zoomLevel === 0 ? 1 : this.zoomLevel < 0 ? -this.zoomLevel : 1 / this.zoomLevel)

            this.origX += draggedAmountX
            this.origY += draggedAmountY

            if (this.origX < 0) {
                this.origX = 0
            } else {
                let scaledCanvasWidth = this.canvasWidth / this.scale;
                if (this.origX + scaledCanvasWidth > this.canvas.width) {
                    this.origX = this.canvas.width - scaledCanvasWidth
                } else {
                    this.ctx.translate(-draggedAmountX, 0)
                }
            }

            if (this.origY < 0) {
                this.origY = 0
            } else {
                let scaledCanvasHeight = this.canvasHeight / this.scale;
                if (this.origY + scaledCanvasHeight > this.canvas.height) {
                    this.origY = this.canvas.height - scaledCanvasHeight
                } else {
                    this.ctx.translate(0, -draggedAmountY)
                }
            }

            this.dragX = x
            this.dragY = y
        }
    }

    onMouseUp() {
        this.isDragging = false
    }

    zoomAt(event) {
        const x = event.clientX - this.canvas.parentNode.getBoundingClientRect().left
        const y = event.clientY - this.canvas.parentNode.getBoundingClientRect().top
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
