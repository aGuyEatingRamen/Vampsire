<script>
export default {
  emits: ['start'],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    startGame() {
      const trimmed = this.name.trim()
      if (trimmed) {
        this.$emit('start', trimmed)
      }
    }
  }
}
</script>

<template>
  <div class="start-screen">
    <div class="start-panel">
      <h1>Vampsire</h1>
      <h3> CONTENT WARNING: VULGARITY AND HINTED THEMES</h3>
      <h4>Get rich or die trying.</h4>
      <input
        v-model="name"
        type="text"
        placeholder="Enter your name..."
        aria-label="Player Name"
      />
      <button @click="startGame">Begin</button>
    </div>
  </div>
</template>

<style scoped>
.start-screen {
  height: 100vh;
  background: linear-gradient(to bottom right, #0f0f0f, #1a0000);
  color: #f87171;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Georgia', serif;
}

.start-panel {
  background: #1a1a1a;
  padding: 2rem 3rem;
  border: 2px solid #f87171;
  border-radius: 16px;
  box-shadow: 0 0 20px #7f1d1d;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #f87171;
}

input {
  padding: 0.6rem 1rem;
  border: 1px solid #f87171;
  border-radius: 8px;
  width: 100%;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
}

button {
  background: transparent;
  border: 2px solid #f87171;
  color: #f87171;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
