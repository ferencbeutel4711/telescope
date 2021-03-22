<template>
  <div class="star-info">
    <div class="star-info__close-button" @click="close"><span>X</span></div>
    <div class="star-info__content">
      <p class="star-info__text star-info__star-name">{{ star.name }}</p>
      <div v-if="star.gates.length > 0">
        <p class="star-info__text star-info__list-label">Gates:</p>
        <div class="star-info__list-item" v-for="gate in star.gates" :key="gate.name">
          <p class="star-info__text">{{ gate.name }} : {{ star.name }} => {{ gate.target }}</p>
        </div>
      </div>
      <div v-if="star.planets.length > 0">
        <p class="star-info__text star-info__list-label">Planets:</p>
        <div class="star-info__list-item" v-for="planet in star.planets" :key="planet.officialName">
          <p class="star-info__text">Official name: {{ planet.officialName }}</p>
          <p class="star-info__text">Name: {{ planet.name }}</p>
        </div>
      </div>
    </div>
    <div class="star-info__visit-system-link" @click="visitSystem"><span>Visit System</span></div>
  </div>
</template>
<script>
import {useRouter} from 'vue-router'

export default {
  name: "StarInfo",
  props: {
    star: Object
  },
  setup(props, {emit}) {
    const router = useRouter()

    const close = () => emit('starInfoClosed')
    const visitSystem = () => router.push({path: `/starmap/${props.star.name}`})

    return {close, visitSystem}
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
    height: calc(650px - 24px);
    margin: 12px;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: left;
    width: calc(100% - 24px);
  }

  &__text {
    font-size: 11pt;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__star-name {
    font-size: 24px;
    margin-bottom: 16px;
  }

  &__list-item {
    border-bottom: 1px solid;
    margin: 12px 0 12px 16px;
  }

  &__list-label {
    margin: 12px 0;
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
