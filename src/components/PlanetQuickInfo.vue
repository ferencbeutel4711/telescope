<template>
  <div class="planet-quickinfo">
    <span>{{ planet.name }}</span>
  </div>
</template>
<script>
export default {
  name: "PlanetQuickInfo",
  props: {
    planet: Object
  }
}
</script>
<style lang="scss" scoped>
.planet-quickinfo {
  color: white;
  text-shadow: 1px 1px 2px black, -1px -1px 2px black;
}
</style>
