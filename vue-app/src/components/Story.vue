<script>

// This is where teh story etxt is displayed along witgh the deceisons afetr.
// the plan is that story text itself will have like the letter by letter flowing kinda of loading appearance
// Then the clickable decesion buttons appear 
import StoryText from "./story_component/StoryText.vue"
import Decesion from "./story_component/DecesionButton.vue"
import storyJson from "../assets/data/story.json"


export default {
  components: {
    Decesion,
    StoryText
  },
  data() {
    return {
      chapter: 0,
      event: 0
    }
  },
  methods: {
    neEvent( redirect ){
      console.log(redirect);
      for(let i = 0; i < storyJson[this.chapter].events.length; i++){
        if((storyJson[this.chapter].events[i].title) == (redirect)){
          console.log("match",i)
          this.event = i;
        }
      }
    }

  },
  computed: {
  },
  mounted() {
  }
}



</script>




<template>
    <StoryText :chapter="chapter" :event="event"/>
    <Decesion :chapter="chapter" :event="event" @newEvent = "(redirect)=> neEvent(redirect)" />
</template>




<style>
  *{
   background-color: black; 
  }

</style>