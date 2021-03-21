<template>
  <div class="star-quickinfo">
    <span>{{star.name}}</span>
  </div>
</template>
<script>
export default {
  name: "StarInfo",
  props: {
    star: Object
  }
}
</script>
<style lang="scss" scoped>
.star-quickinfo {
  color: white;
}
</style>
