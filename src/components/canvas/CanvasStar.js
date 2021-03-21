const isIntersecting = (event, canvas, star, origX, origY, scale) => {
    const x = (event.clientX - canvas.parentNode.getBoundingClientRect().left) * (1 / scale)
    const y = (event.clientY - canvas.parentNode.getBoundingClientRect().top) * (1 / scale)
    const dx = x - (star.position.x - origX)
    const dy = y - (star.position.y - origY)

    return (Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(star.position.size, 2))
}

const screenPointForStarCenter = (star, origX, origY, scale) => {
    return {
        x: (star.position.x - origX) * scale,
        y: (star.position.y - origY) * scale,
    }
}

export default class CanvasStar {
    constructor(canvas, starConfig, controls, canvasWidth, canvasHeight) {
        this.star = starConfig
        this.canDisplayInfo = false
        this.canvas = canvas
        this.controls = controls
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
    }

    draw() {
        const ctx = this.canvas.getContext('2d')
        ctx.beginPath()
        ctx.arc(this.star.position.x, this.star.position.y, this.star.position.size, 0, 2 * Math.PI)
        ctx.fillStyle = this.star.style.color
        ctx.fill()
        ctx.closePath()
    }

    onMouseDown(event) {
        if (isIntersecting(event, this.canvas, this.star, this.controls.getCurrentOrigX(), this.controls.getCurrentOrigY(), this.controls.getCurrentScale())) {
            this.canDisplayInfo = true
        }
    }

    onMouseMove(event) {
        if(isIntersecting(event, this.canvas, this.star, this.controls.getCurrentOrigX(), this.controls.getCurrentOrigY(), this.controls.getCurrentScale())) {
            return {
                star: this.star,
                screenPoint: screenPointForStarCenter(this.star, this.controls.getCurrentOrigX(), this.controls.getCurrentOrigY(), this.controls.getCurrentScale())
            }
        }

        return null
    }

    onMouseUp(event) {
        if (this.canDisplayInfo && isIntersecting(event, this.canvas, this.star, this.controls.getCurrentOrigX(), this.controls.getCurrentOrigY(), this.controls.getCurrentScale())) {
            this.canDisplayInfo = false
            this.controls.scrollToOrig(this.star.position.x - this.canvasWidth * (1 / this.controls.getCurrentScale()) * 0.5, this.star.position.y - this.canvasHeight * (1 / this.controls.getCurrentScale()) * 0.75)
            return {
                star: this.star,
                screenPoint: screenPointForStarCenter(this.star, this.controls.getCurrentOrigX(), this.controls.getCurrentOrigY(), this.controls.getCurrentScale())
            }
        }

        this.canDisplayInfo = false
        return null
    }
}
