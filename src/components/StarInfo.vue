<template>
  <div class="star-info">
    <div class="star-info__close-button" @click="close"><span>X</span></div>
    <div class="star-info__content">
      <span class="star-info__star-name">{{ star.name }}</span>
    </div>
    <div class="star-info__visit-system-link"><span>Visit System</span></div>
  </div>
</template>
<script>
export default {
  name: "StarInfo",
  props: {
    star: Object
  },
  setup(props, {emit}) {
    const close = () => emit('starInfoClosed')

    return {close}
  }
}
</script>
<style lang="scss" scoped>
.star-info {
  background-color: white;
  box-shadow: 0 15px 40px 5px rgba(102, 155, 152, 0.66);
  border: 10px solid rgb(0, 191, 182);
  color: black;
  height: 700px;
  position: relative;
  text-align: center;
  width: 680px;

  &:before {
    content: "";
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-top: 40px solid #00bfb6;
    border-bottom: 10px solid transparent;
    bottom: -50px;
    height: 0;
    position: absolute;
    right: calc(50% - 60px);
    width: 0;
  }

  &:after {
    content: "";
    border-left: 45px solid transparent;
    border-right: 45px solid transparent;
    border-top: 30px solid #ffffff;
    border-bottom: 10px solid transparent;
    bottom: -40px;
    height: 0;
    position: absolute;
    right: calc(50% - 45px);
    width: 0;
  }

  &__content {
    display: block;
    height: calc(670px - 24px);
    margin: 12px;
    text-align: left;
    width: calc(100% - 24px);
  }

  &__star-name {
    font-size: 24px;
  }

  &__visit-system-link {
    display: inline-block;

    &:hover {
      color: #00bfb6;
      cursor: pointer;
    }
  }

  &__close-button {
    cursor: pointer;
    display: inline-block;
    margin: 12px 12px 0 0;
    float: right;
  }
}
</style>
