<script>

// Gonna plan out Story and Lore here
// This is going to be the logic that will send up teh story etxt using json
// Retrieve them from story.json and then shoot them up the DOM
import storyJson from "../../assets/data/story.json"

export default {
  props: ['chapter', 'event'],
  computed: {
    storyText() {
      return storyJson[this.chapter]?.events?.[this.event]?.text || "Story text not found.";
    }
  },
  mounted() {
    console.log("StoryText mounted. Current event:", this.event);
  }
}
</script>

<template>
  <div class="story" id="story">{{ storyText }}</div>
</template>

<style>
.story {
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
  text-align-last: center;
  max-width: 700px;
  margin: 10rem auto 20rem auto;
  color: #fff;
  text-shadow: 0 0 10px red, 0 0 20px red;
}
</style>