<script>

// Gonna plan out Story and Lore here
// This is going to be the logic that will send up teh story etxt using json
// Retrieve them from story.json and then shoot them up the DOM
import storyJson from "../../assets/data/story.json"

export default {
  components: {

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
    <div class="story" id="story"></div>
</template>