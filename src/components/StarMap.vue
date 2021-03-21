<template>
  <p>Starmap</p>
  <p>origX: {{ origX }}</p>
  <p>origY: {{ origY }}</p>
  <div class="starmap-container">
    <transition name="blur">
      <div class="starmap-blur" v-if="interactionLocked"/>
    </transition>
    <canvas id="starmap" class="starmap" :height="10000" :width="10000" @wheel.prevent="handleZoom"/>
    <StarInfo class="starinfo" :style="{
      left: `${selectedStar.screenPoint.x - 350}px`,
      top: `${selectedStar.screenPoint.y - 800}px`
    }" v-if="selectedStar" :star="selectedStar.star" @starInfoClosed="starInfoClosed"/>
    <StarQuickInfo class="star-quickinfo" :style="{
      left: `${hoveredStar.screenPoint.x + 30}px`,
      top: `${hoveredStar.screenPoint.y - 40}px`
    }" v-if="hoveredStar" :star="hoveredStar.star"/>
  </div>
</template>
<script>
import {onMounted, ref} from 'vue'
import CanvasStar from "@/components/canvas/CanvasStar"
import CanvasGate from "@/components/canvas/CanvasGate";
import Controls from "@/components/canvas/Controls";
import StarInfo from "@/components/StarInfo";
import StarQuickInfo from "@/components/StarQuickInfo";
import {findAndMap} from "@/util/IteratorUtil";

// TODO: use in styling
const canvasWidth = 1800
const canvasHeight = 1100

const startingX = 3000
const startingY = 4200

const starmapData = {
  stars: [
    {
      name: 'Sol',
      style: {
        color: '#f3d98a'
      },
      position: {
        x: 5000,
        y: 5000,
        size: 10
      },
      gates: [
        {
          name: 'Sol -> Alpha I',
          target: 'Alpha I',
          tier: 'SMALL'
        },
        {
          name: 'First Contact',
          target: 'Alpha II',
          tier: 'MEDIUM'
        }
      ]
    },
    {
      name: 'Alpha I',
      style: {
        color: '#9fac5d'
      },
      position: {
        x: 4300,
        y: 4500,
        size: 20
      },
      gates: [
        {
          name: 'Alpha I -> Alpha II',
          target: 'Alpha II',
          tier: 'SMALL'
        }
      ]
    },
    {
      name: 'Alpha II',
      style: {
        color: '#9fac5d'
      },
      position: {
        x: 3300,
        y: 5200,
        size: 18
      },
      gates: [
        {
          name: 'Alpha II -> Alpha I',
          target: 'Alpha I',
          tier: 'SMALL'
        },
        {
          name: 'First Encounter',
          target: 'Sol',
          tier: 'MEDIUM'
        }
      ]
    },
  ]
}

export default {
  name: "Starmap",
  components: {StarInfo, StarQuickInfo},
  setup() {
    let canvas, ctx, controls
    let stars = []
    let interactionLocked = ref(false)
    let selectedStar = ref()
    let hoveredStar = ref()
    let origX = ref()
    let origY = ref()

    const draw = () => {
      // reset canvas elements
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      // red border
      ctx.beginPath()
      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(212,29,29,1)'
      ctx.lineWidth = 20 * (1 / controls.getCurrentScale())
      ctx.stroke()
      ctx.closePath()

      // grid x
      for (const i of Array(9).keys()) {
        ctx.beginPath()
        ctx.moveTo(canvas.width * parseFloat(`0.${i + 1}`), 0)
        ctx.lineTo(canvas.width * parseFloat(`0.${i + 1}`), canvas.height)
        ctx.strokeStyle = 'rgba(126,126,126,0.3)'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.closePath()
      }

      for (const i of Array(9).keys()) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height * parseFloat(`0.${i + 1}`))
        ctx.lineTo(canvas.width, canvas.height * parseFloat(`0.${i + 1}`))
        ctx.strokeStyle = 'rgba(126,126,126,0.3)'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.closePath()
      }

      // draw gates first to move them under the stars
      starmapData.stars.forEach((star) => star.gates.forEach((gate) => new CanvasGate(canvas, gate, star, starmapData.stars)))

      // draw stars
      stars.forEach((star) => star.draw())
    }

    onMounted(() => {
      canvas = document.getElementById('starmap')
      ctx = canvas.getContext('2d')

      controls = new Controls(ctx, canvas, startingX, startingY, canvasWidth, canvasHeight)

      setInterval(() => {
        origX.value = controls.getCurrentOrigX()
        origY.value = controls.getCurrentOrigY()
      }, 50)

      canvas.addEventListener('mousedown', (event) => {
        event.preventDefault()

        if (!interactionLocked.value) {
          controls.onMouseDown(event)
          stars.forEach((star) => star.onMouseDown(event))
        }
      })

      canvas.addEventListener('mouseleave', () => {
        controls.onMouseLeave()
      })

      canvas.addEventListener('mousemove', (event) => {
        event.preventDefault()

        if (!interactionLocked.value) {
          controls.onMouseMove(event)

          hoveredStar.value = null
          const foundStar = findAndMap(stars, (v) => v != null, (star) => star.onMouseMove(event))
          if (foundStar) {
            console.log(foundStar)
            hoveredStar.value = foundStar
          }
        }
      })

      canvas.addEventListener('mouseup', (event) => {
        event.preventDefault()

        if (!interactionLocked.value) {
          controls.onMouseUp()
          const clickedStar = findAndMap(stars, (v) => v != null, (star) => star.onMouseUp(event))
          if (clickedStar) {
            hoveredStar.value = null
            selectedStar.value = clickedStar
            interactionLocked.value = true
          }
        }
      })

      stars = starmapData.stars.map((star) => new CanvasStar(canvas, star, controls, canvasWidth, canvasHeight))

      // move to start
      ctx.translate(-startingX, -startingY)

      setInterval(() => draw(controls), 800 / 60)
    })

    const handleZoom = (e) => {
      if (!interactionLocked.value) {
        controls.zoomAt(e)
      }
    }

    const starInfoClosed = () => {
      selectedStar.value = null
      interactionLocked.value = false
    }

    return {
      handleZoom,
      interactionLocked,
      starInfoClosed,
      selectedStar,
      hoveredStar,
      origX,
      origY
    }
  }
}
</script>
<style lang="scss" scoped>
.starmap-container {
  background-color: rgb(72, 72, 72);
  height: 1100px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 1800px;
}

.blur-enter-active, .blur-leave-active {
  transition: opacity .5s;
}

.blur-enter-from, .blur-leave-to {
  opacity: 0;
}

.starmap-blur {
  backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  position: absolute;
  width: 100%;
}

.starinfo {
  position: absolute;
}

.star-quickinfo {
  position: absolute;
}
</style>
