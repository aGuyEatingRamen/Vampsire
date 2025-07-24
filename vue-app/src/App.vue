<script>
import Game from './Game.vue'
import User from './User.vue'

export let playerName = ''

export default {
  components: { Game, User },
  data() {
    return {
      nameEntered: false
    }
  },
  methods: {
    handleStart(name) {
      playerName = name
      this.nameEntered = true
    }
  }
}
</script>

<template>
  <div>
    <User v-if="!nameEntered" @start="handleStart" />
    <Game v-else />
  </div>
</template>
