const determineStyle = (tier) => {
    switch (tier) {
        case GateTiers.SMALL:
            return {
                strokeStyle: '#7a328a',
                lineWidth: 1,
                arrowLength: 8,
                arrowSize: 8
            }
        case GateTiers.MEDIUM:
            return {
                strokeStyle: '#b44bcb',
                lineWidth: 2,
                arrowLength: 10,
                arrowSize: 10
            }
        default:
            console.error(`unknown gate tier: ${tier}`)
            return null
    }
}

const determineTarget = (target, stars) => {
    const foundTarget = stars.find((star) => star.name === target)
    if (!foundTarget) {
        console.error(`cannot find target: ${target}`)
    }

    return foundTarget
}

const drawLineWithArrow = (ctx, x0, y0, r0, x1, y1, r1, style) => {
    const dx = x1 - x0
    const dy = y1 - y0
    const angle = Math.atan2(dy, dx)
    const length = Math.sqrt(dx * dx + dy * dy)
    const targetX0 = 0 + r0
    const targetX1 = length - r1

    ctx.save()
    ctx.translate(x0, y0)
    ctx.rotate(angle)
    ctx.beginPath()
    ctx.lineWidth = style.lineWidth
    ctx.strokeStyle = style.strokeStyle
    ctx.moveTo(targetX0, 0)
    ctx.lineTo(targetX1, 0)
    ctx.moveTo(targetX1 - style.arrowLength, -style.arrowSize)
    ctx.lineTo(targetX1, 0)
    ctx.lineTo(targetX1 - style.arrowLength, style.arrowSize)

    ctx.stroke()
    ctx.closePath()
    ctx.restore()
}


export default class CanvasGate {
    constructor(canvas, gateConfig, sourceStar, stars) {
        const style = determineStyle(gateConfig.tier)
        if (!style) return

        const target = determineTarget(gateConfig.target, stars)
        if (!target) return

        const ctx = canvas.getContext('2d')
        drawLineWithArrow(ctx, sourceStar.position.x, sourceStar.position.y, sourceStar.position.size, target.position.x, target.position.y, target.position.size, style)
    }
}

export const GateTiers = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM'
}
