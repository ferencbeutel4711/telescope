<template>
  <div id="systemmap-container" class="systemmap-container">
    <canvas id="systemmap" style="z-index: 1" class="systemmap"/>
    <canvas id="background-0" style="z-index: -1" class="background background-0"/>
  </div>
  <PlanetQuickInfo class="planet-quickinfo" :style="{
      left: `${hoveredPlanet.getX() + hoveredPlanet.getPlanet().size + 10}px`,
      top: `${hoveredPlanet.getY() - hoveredPlanet.getPlanet().size + 50}px`
    }" v-if="hoveredPlanet" :planet="hoveredPlanet.getPlanet()"/>
</template>
<script>
import {ref, onMounted, onUnmounted} from 'vue'
import universeConfig from '@/universeConfig'
import CanvasPlanet from "@/components/canvas/CanvasPlanet";
import PlanetQuickInfo from "@/components/PlanetQuickInfo";

export default {
  name: "SystemMap",
  props: {
    system: String
  },
  components: {
    PlanetQuickInfo
  },
  setup(props) {
    const star = ref(universeConfig.stars.find(s => s.name === props.system))
    const hoveredPlanet = ref()

    let drawInterval, rotationInterval, onMouseMoveListener

    let canvasContainer, canvas, canvasBg

    const planetDegs = {}
    const canvasPlanets = []

    const draw = () => {
      const canvasWidth = canvasContainer.clientWidth;
      const canvasHeight = canvasContainer.clientHeight;

      canvas.width = canvasWidth
      canvas.height = canvasHeight

      canvasBg.width = canvasWidth
      canvasBg.height = canvasHeight

      const ctx = canvas.getContext('2d')


      // reset canvas elements
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      // draw star
      ctx.save()
      ctx.beginPath()
      const starRadius = 80;
      const centerX = canvasWidth / 2
      const centerY = canvasHeight / 2

      ctx.arc(centerX, centerY, starRadius, 0, 2 * Math.PI)

      const grad = ctx.createRadialGradient(centerX, centerY, starRadius / 15, centerX, centerY, starRadius)
      grad.addColorStop(0, `hsl(${star.value.style.hue}, ${star.value.style.saturation / 2}%, ${Math.min(100, star.value.style.lightness * 1.5)}%)`)
      grad.addColorStop(0.8, `hsl(${star.value.style.hue}, ${star.value.style.saturation}%, ${Math.min(100, star.value.style.lightness)}%)`)

      ctx.fillStyle = grad
      ctx.shadowBlur = 75
      ctx.shadowColor = `hsl(${star.value.style.hue}, ${star.value.style.saturation}%, ${Math.min(100, star.value.style.lightness)}%)`
      ctx.fill()
      ctx.closePath()
      ctx.restore()

      // draw planets
      canvasPlanets.forEach((canvasPlanet) => {
        canvasPlanet.draw(planetDegs[canvasPlanet.getName()], centerX, centerY)
      })
    }

    onMounted(() => {
      canvasContainer = document.getElementById('systemmap-container')
      canvas = canvasContainer.querySelector('#systemmap')
      canvasBg = canvasContainer.querySelector('#background-0')

      star.value.planets.forEach((planet) => {
        planetDegs[planet.officialName] = planet.startingDeg;
        canvasPlanets.push(new CanvasPlanet(canvas, planet))
      })

      onMouseMoveListener = (event) => {
        hoveredPlanet.value = null
        document.body.style.cursor = 'default'
        const foundPlanet = canvasPlanets.find((canvasPlanet) => canvasPlanet.isIntersecting(event))
        if (foundPlanet) {
          document.body.style.cursor = 'pointer'
          hoveredPlanet.value = foundPlanet
        }
      };
      canvas.addEventListener('mousemove', onMouseMoveListener)

      // draw loop
      drawInterval = setInterval(() => {
        draw();
      }, 10)

      // planet rotation loop
      rotationInterval = setInterval(() => {
        if (!hoveredPlanet.value) {
          canvasPlanets.forEach((canvasPlanet) => planetDegs[canvasPlanet.getName()] = (planetDegs[canvasPlanet.getName()] + canvasPlanet.getPlanet().rotationSpeed))
        }
      }, 50)
    })

    onUnmounted(() => {
      clearInterval(drawInterval)
      clearInterval(rotationInterval)
      canvas.removeEventListener('mousemove', onMouseMoveListener)
    })

    return {hoveredPlanet}
  }
}
</script>
<style lang="scss" scoped>
.systemmap-container {
  height: calc(100vh - 80px);
  overflow: hidden;
  position: relative;
  width: 100vw;
}

.planet-quickinfo {
  position: absolute;
  z-index: 900;
}

.systemmap {
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
