<script>

// Gonna plan out Story and Lore here
// This is going to be the logic that will send up teh story etxt using json
// Retrieve them from story.json and then shoot them up the DOM
import storyJson from "../../assets/data/story.json"
export default {
  props: ['chapter', 'event'],
  data() {
    return {
      fullText: "",
      displayedText: "",
      index: 0,
      interval: null
    };
  },
  watch: {
    // Watch for chapter or event change to restart typing
    chapter: "startTyping",
    event: "startTyping"
  },
  methods: {
    startTyping() {
      this.resetTyping();
      this.fullText = storyJson[this.chapter]?.events?.[this.event]?.text || "Text not found.";
      this.index = 0;

      this.interval = setInterval(() => {
        if (this.index < this.fullText.length) {
          this.displayedText += this.fullText[this.index];
          this.index++;
        } else {
          clearInterval(this.interval);
          this.$emit('typingDone');
          // Sends the siginal for decesion buttons to appear

        }
      }, 30); 
      // Typing speed here

    },
    resetTyping() {
      clearInterval(this.interval);
      //  Typing get reset through inteverval
      this.displayedText = "";
      this.index = 0;
    }
  },
  mounted() {
    this.startTyping();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<template>
  <div class="story" id="story">{{ displayedText }}</div>
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
  min-height: 6rem;
  white-space: pre-wrap;
}
</style>