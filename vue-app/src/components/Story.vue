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
      event: 0,
      showButtons: false  
      // Controls button visibility
    }
  },
  methods: {
    neEvent(redirect) {
      this.showButtons = false; 
       // Hide buttons when new event loads (new text starts)
      for (let i = 0; i < storyJson[this.chapter].events.length; i++) {
        if (storyJson[this.chapter].events[i].title === redirect) {
          this.event = i;
          break;
        }
      }
    },
    onTypingDone() {
      this.showButtons = true;  
      // Show buttons only when typing finishes
    }
  }
}
</script>

<template>
  <StoryText 
    :chapter="chapter" 
    :event="event" 
    @typingDone="onTypingDone" 
  />
  <Decesion 
    v-if="showButtons" 
    :chapter="chapter" 
    :event="event" 
    @newEvent="neEvent" 
  />
</template>


