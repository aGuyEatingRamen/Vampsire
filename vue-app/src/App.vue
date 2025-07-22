
<script>
import SceneView from './components/Scene.vue'
import StoryView from './components/Story.vue'

export default {
  components: {
    SceneView,
    StoryView
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
</template>


<style>
/* main components fro veiw */
/* alpha complete */
  *{
   background-color: black; 
  }

</style>