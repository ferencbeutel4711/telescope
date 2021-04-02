<template>
  <div class="starmap-container">
    <transition name="blur">
      <div class="starmap-blur" v-if="interactionLocked"/>
    </transition>
    <div v-if="debug">
      <p v-for="bg in debugOrigXList" :key="bg.key">{{ bg.key }} : {{ bg.value }}</p>
    </div>
    <canvas id="starmap" class="starmap" :height="10000" :width="10000" @wheel.prevent="handleZoom"/>
    <canvas id="background-0" style="z-index: -1" class="background background-0" :height="2000" :width="2000"/>
    <canvas id="background-1" style="z-index: 8" class="background" :height="7500" :width="7500"/>
    <canvas id="background-2" style="z-index: 6" class="background" :height="7500" :width="7500"/>
    <canvas id="background-3" style="z-index: 4" class="background" :height="7500" :width="7500"/>
    <canvas id="background-4" style="z-index: 2" class="background" :height="7500" :width="7500"/>
    <StarInfo class="starinfo" :style="{
      left: `${selectedStar.screenPoint.x - 350}px`,
      top: `${selectedStar.screenPoint.y - 800}px`
    }" v-if="selectedStar" :star="selectedStar.star" @starInfoClosed="starInfoClosed"/>
    <StarQuickInfo class="star-quickinfo" :style="{
      left: `${hoveredStar.screenPoint.x + hoveredStar.star.position.size + 10}px`,
      top: `${hoveredStar.screenPoint.y - hoveredStar.star.position.size - 20}px`
    }" v-if="hoveredStar" :star="hoveredStar.star"/>
  </div>
</template>
<script>
import {onMounted, ref, onUnmounted} from 'vue'
import CanvasStar from "@/components/canvas/CanvasStar"
import CanvasGate from "@/components/canvas/CanvasGate";
import Controls from "@/components/canvas/Controls";
import StarInfo from "@/components/StarInfo";
import StarQuickInfo from "@/components/StarQuickInfo";
import {findAndMap} from "@/util/IteratorUtil";
import CanvasBackground from "@/components/canvas/CanvasBackground";
import universeConfig from '@/universeConfig'

// TODO: use in styling
const htmlWidth = 1800
const htmlHeight = 1100

const startingX = 3000
const startingY = 4200

const debug = false

const displayGrid = true

export default {
  name: "Starmap",
  components: {StarInfo, StarQuickInfo},
  setup() {
    let debugInterval, drawInterval, onMouseDownListener, onMouseLeaveListener, onMouseMoveListener, onMouseUpListener

    let canvas, backgroundCanvasList, controls
    let stars = []
    let interactionLocked = ref(false)
    const selectedStar = ref()
    const hoveredStar = ref()

    const debugOrigXList = ref([])

    const draw = () => {
      const ctx = canvas.getContext('2d')

      // reset canvas elements
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      if (displayGrid) {
        // grid x
        for (const i of Array(9).keys()) {
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(canvas.width * parseFloat(`0.${i + 1}`), 0)
          ctx.lineTo(canvas.width * parseFloat(`0.${i + 1}`), canvas.height)
          ctx.strokeStyle = 'rgba(126,126,126,0.4)'
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.closePath()
          ctx.restore()
        }

        // grid y
        for (const i of Array(9).keys()) {
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(0, canvas.height * parseFloat(`0.${i + 1}`))
          ctx.lineTo(canvas.width, canvas.height * parseFloat(`0.${i + 1}`))
          ctx.strokeStyle = 'rgba(126,126,126,0.4)'
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.closePath()
          ctx.restore()
        }
      }

      // red border
      ctx.save()
      ctx.beginPath()
      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(212,29,29,1)'
      ctx.lineWidth = 20 * (1 / controls.getCurrentScale())
      ctx.stroke()
      ctx.closePath()
      ctx.restore()

      // draw gates first to move them under the stars
      universeConfig.stars.forEach((star) => star.gates.forEach((gate) => new CanvasGate(canvas, gate, star, universeConfig.stars)))

      // draw stars
      stars.forEach((star) => star.draw())

      backgroundCanvasList.forEach((backgroundInfo) => {
        const backgroundContext = backgroundInfo.canvas.getContext('2d')

        // reset canvas elements
        backgroundContext.save()
        backgroundContext.setTransform(1, 0, 0, 1, 0, 0)
        backgroundContext.clearRect(0, 0, backgroundInfo.canvas.width, backgroundInfo.canvas.height)
        backgroundContext.restore()

        backgroundInfo.background.render()

        if (debug) {
          // grid x
          for (const i of Array(9).keys()) {
            backgroundContext.save()
            backgroundContext.beginPath()
            backgroundContext.moveTo(backgroundInfo.canvas.width * parseFloat(`0.${i + 1}`), 0)
            backgroundContext.lineTo(backgroundInfo.canvas.width * parseFloat(`0.${i + 1}`), backgroundInfo.canvas.height)
            backgroundContext.strokeStyle = 'rgba(245,88,88,1)'
            backgroundContext.lineWidth = 1
            backgroundContext.stroke()
            backgroundContext.closePath()
            backgroundContext.restore()
          }

          // grid y
          for (const i of Array(9).keys()) {
            backgroundContext.save()
            backgroundContext.beginPath()
            backgroundContext.moveTo(0, backgroundInfo.canvas.height * parseFloat(`0.${i + 1}`))
            backgroundContext.lineTo(backgroundInfo.canvas.width, backgroundInfo.canvas.height * parseFloat(`0.${i + 1}`))
            backgroundContext.strokeStyle = 'rgba(245,88,88,1)'
            backgroundContext.lineWidth = 1
            backgroundContext.stroke()
            backgroundContext.closePath()
            backgroundContext.restore()
          }
        }
      })
    }

    onMounted(() => {
      canvas = document.getElementById('starmap')
      backgroundCanvasList = [
        {
          parallax: 0.4,
          canvas: document.getElementById('background-1'),
          background: new CanvasBackground(document.getElementById('background-1'), 8),
          origX: 0,
          origY: 0,
          scale: 1,
        },
        {
          parallax: 0.25,
          canvas: document.getElementById('background-2'),
          background: new CanvasBackground(document.getElementById('background-2'), 6),
          origX: 0,
          origY: 0,
          scale: 1,
        },
        {
          parallax: 0.1,
          canvas: document.getElementById('background-3'),
          background: new CanvasBackground(document.getElementById('background-3'), 4),
          origX: 0,
          origY: 0,
          scale: 1,
        },
        {
          parallax: 0.05,
          canvas: document.getElementById('background-4'),
          background: new CanvasBackground(document.getElementById('background-4'), 2),
          origX: 0,
          origY: 0,
          scale: 1,
        },
      ]

      controls = new Controls(canvas, backgroundCanvasList, htmlWidth, htmlHeight)

      debugInterval = setInterval(() => {
        debugOrigXList.value = [{
          key: 'primary',
          value: controls.getCurrentOrigX()
        }, ...backgroundCanvasList.map(bg => ({
          key: 'bg1',
          value: bg.origX
        }))]
      }, 50)

      onMouseDownListener = (event) => {
        event.preventDefault()

        if (!interactionLocked.value) {
          controls.onMouseDown(event)
          stars.forEach((star) => star.onMouseDown(event))
        }
      };
      canvas.addEventListener('mousedown', onMouseDownListener)

      onMouseLeaveListener = () => {
        controls.onMouseLeave()
      };
      canvas.addEventListener('mouseleave', onMouseLeaveListener)

      onMouseMoveListener = (event) => {
        event.preventDefault()

        if (!interactionLocked.value) {
          controls.onMouseMove(event, false)

          hoveredStar.value = null
          document.body.style.cursor = 'default'
          const foundStar = findAndMap(stars, (v) => v != null, (star) => star.onMouseMove(event))
          if (foundStar) {
            document.body.style.cursor = 'pointer'
            hoveredStar.value = foundStar
          }
        }
      };
      canvas.addEventListener('mousemove', onMouseMoveListener)

      onMouseUpListener = (event) => {
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
      };
      canvas.addEventListener('mouseup', onMouseUpListener)

      stars = universeConfig.stars.map((star) => new CanvasStar(canvas, star, controls, htmlWidth, htmlHeight))

      // move to start
      controls.scrollToOrig(startingX, startingY)

      drawInterval = setInterval(() => {
        draw();
      }, 10)
    })

    onUnmounted(() => {
      clearInterval(debugInterval)
      clearInterval(drawInterval)
      canvas.removeEventListener('mousedown', onMouseDownListener)
      canvas.removeEventListener('mouseleave', onMouseLeaveListener)
      canvas.removeEventListener('mousemove', onMouseMoveListener)
      canvas.removeEventListener('mouseup', onMouseUpListener)
    })

    const handleZoom = (e) => {
      if (!interactionLocked.value) {
        controls.zoomAt(e, false)
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
      debugOrigXList,
      debug
    }
  }
}
</script>
<style lang="scss" scoped>
.starmap-container {
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
  z-index: 990;
}

.star-quickinfo {
  position: absolute;
  z-index: 900;
}

.starmap {
  left: 0;
  position: absolute;
  top: 0;
  z-index: 100;
}

.background-0 {
  background-color: black;
}

.background {
  left: 0;
  position: absolute;
  top: 0;
}
</style>
