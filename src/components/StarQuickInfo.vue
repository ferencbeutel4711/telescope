<template>
  <div class="star-quickinfo">
    <span>{{star.name}}</span>
  </div>
</template>
<script>
export default {
  name: "StarQuickInfo",
  props: {
    star: Object
  }
}
</script>
<style lang="scss" scoped>
.star-quickinfo {
  color: white;
  text-shadow: 1px 1px 2px black, -1px -1px 2px black;
}
</style>
