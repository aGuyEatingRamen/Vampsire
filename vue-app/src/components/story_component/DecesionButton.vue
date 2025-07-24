





<script>
// This is where teh decesion buttons are going to help naviaget to new story text when you make a decesion within the game
// basically this is a counterpart to Story Text that will help navigate the story graph

import storyJson from "../../assets/data/story.json"
import { applyInventoryChanges } from '../../stores/inventory.js'

export default {
  props: ['chapter', 'event'],
  data() {
    return {
      decisionClick: {}
    }
  },
  computed: {
    decisions() {
      return storyJson[this.chapter]?.events?.[this.event]?.decesion || [];
    }
  },
  methods: {
    getNewEvent(decision) {
      console.log("Redirect to:", decision.redirect);
      if (decision.inventory_change) {
        applyInventoryChanges(decision.inventory_change)
      }

    this.$emit('newEvent', decision.redirect)
    }
  }
}
</script>

<template>
  <div class="holder">
    <div class="choices">
      <button class="choice-button" v-for="dec in decisions" :key="dec.text" @click="getNewEvent(dec)">
        {{ dec.text }}
      </button>
    </div>
  </div>
</template>

<style>
.holder {
  text-align: center;
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
  background: none;
  color: #e63946; 
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.6rem 1.2rem;
  border: 2px solid #e63946;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 0.5rem;
  transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  box-shadow: none;
  user-select: none;

  min-width: 140px;
  max-width: 280px;
  white-space: normal; 
  text-align: center;
  line-height: 1.3;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.choice-button:hover {
  background-color: rgba(255, 255, 255, 0.20); 
}



</style>
