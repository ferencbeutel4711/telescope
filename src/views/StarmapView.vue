<template>
  <Starmap :style="{display: selectedSystem ? 'none' : 'block'}"/>
  <SystemMap v-if="selectedSystem" :system="selectedSystem"/>
</template>

<script>
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import Starmap from "@/components/StarMap";
import SystemMap from "@/components/SystemMap";

export default {
  name: "Home",
  components: {
    Starmap,
    SystemMap
  },
  setup() {
    const route = useRoute()
    const selectedSystem = ref(route.params.system)

    watch(() => route.params.system, (newSystem) => {
      selectedSystem.value = newSystem
    })


    return {selectedSystem}
  }
};
</script>
