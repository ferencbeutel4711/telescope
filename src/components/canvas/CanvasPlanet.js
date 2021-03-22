export default class CanvasPlanet {
    constructor(canvas, planet) {
        this.canvas = canvas
        this.planet = planet
    }

    getName() {
        return this.planet.officialName
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getPlanet() {
        return this.planet
    }

    draw(rotationDeg, centerX, centerY) {
        const distanceToStar = this.planet.distanceToStar / 2 * Math.min(this.canvas.width, this.canvas.height);
        const ctx = this.canvas.getContext('2d')
        this.x = -(Math.sin(rotationDeg * Math.PI / 180) * ((centerY - distanceToStar) - centerY)) + centerX
        this.y = Math.cos(rotationDeg * Math.PI / 180) * ((centerY - distanceToStar) - centerY) + centerY

        // draw planet rotation axis
        ctx.save()
        ctx.beginPath()
        ctx.arc(centerX, centerY, distanceToStar, 0, 2 * Math.PI)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.closePath()
        ctx.restore()

        // draw planet body
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.planet.color
        ctx.arc(this.x, this.y, this.planet.size, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }

    isIntersecting(event) {
        const dx = event.offsetX - this.x
        const dy = event.offsetY - this.y

        return (Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(this.planet.size, 2))
    }
}
