<script>
/* main components fro veiw */

import SceneView from './components/Scene.vue'
import StoryView from './components/Story.vue'
import Inventory from './components/Inventory.vue'

export default {
  components: {
    SceneView,
    StoryView,
    Inventory
  },
  data() {
    return {
      state: true
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<template>
  <StoryView v-if="state"/>
  <SceneView v-else/>
  <Inventory ref="inventoryRef" />
</template>


<style>
  *{
   background-color: black; 
  }

</style>