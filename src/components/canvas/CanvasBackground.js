const generateBackgroundStar = (canvas, zindex) => {
    const colorSeed = Math.random();
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * zindex,
        color: `rgba(${colorSeed * 255}, ${colorSeed * 255}, ${colorSeed * 255}, 1)`,
        glow: Math.random() * zindex * 3
    }
}

const renderBackgroundStar = (canvas, ctx, {x, y, r, color, glow}) => {
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 360)
    ctx.fillStyle = color
    ctx.shadowBlur = glow
    ctx.shadowColor = color
    ctx.fill()
    ctx.closePath()
    ctx.restore()
}

export default class CanvasBackground {
    constructor(canvas, zindex) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.backgroundStars = Array(Math.round(1500 * (1 / zindex))).fill(1).map(() => generateBackgroundStar(canvas, zindex))
    }

    render() {
        this.backgroundStars.forEach((backgroundStar) => {
            renderBackgroundStar(this.canvas, this.ctx, backgroundStar);
        })
    }
}
