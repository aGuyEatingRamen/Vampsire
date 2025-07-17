





<script>
// This is where teh decesion buttons are going to help naviaget to new story text when you make a decesion within the game
// basically this is a counterpart to Story Text that will help navigate the story graph


import storyJson from "../../assets/data/story.json"

export default {
  props:['chapter','event'],
  components: {

  },
  data() {
    return {
        decesions: (storyJson[this.chapter].events)[this.event].decesion
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
    <div class ="holder">
    <div class="choices hidden">
        <button class="choice-button" v-for="dec in decesions"> {{ dec.text }}
        </button>
    </div>
    </div>

</template>

<style>
    .holder{
      text-align:center;
    }
    .choices {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 1.2rem;
      max-width: 600px;
      margin: auto;

    }

  .choice-button {
    display: flex;
    align-items: center;
    background: transparent;
    color: #ff0000;
    text-shadow: 0 0 5px #ff0000;
    font-weight:bold;
    font-size: 1.1rem;
    padding: 0.75rem 1rem;
    border: 3px double white;
    border-radius: 5px;
    cursor: pointer;
    margin: auto;
    transition: background-color 0.3s ease;
  }
</style>