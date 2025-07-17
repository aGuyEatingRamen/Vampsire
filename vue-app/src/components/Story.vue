<script>

// This is where teh story etxt is displayed along witgh the deceisons afetr.
// the plan is that story text itself will have like the letter by letter flowing kinda of loading appearance
// Then the clickable decesion buttons appear 
import StoryText from "./story_component/StoryText.vue"
import Decesion from "./story_component/DecesionButton.vue"

export default {
  components: {
    Decesion,
    StoryText
  },
  data() {
    return {
      
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
    <StoryText/>
    <Decesion/>
</template>




<style>
  *{
   background-color: black; 
  }
  .choice-button {
    display: flex;
    align-items: center;
    background: transparent;
    color: #ff0000;
    text-shadow: 0 0 5px #ff0000;
    font-size: 1.1rem;
    padding: 0.75rem 1rem;
    border: 3px double white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
</style>