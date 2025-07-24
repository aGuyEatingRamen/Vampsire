<script setup>
// bruh, it's working now
import { Backpack } from 'lucide-vue-next'
import { ref } from 'vue'
import { inventory } from '../stores/inventory.js'

const open = ref(false)

function toggleOpen() {
  open.value = !open.value
}
</script>

<template>
  <div>
    <button class="inventory-toggle" @click="toggleOpen">
      <Backpack class="icon" />
    </button>

    <transition name="inventory-fade">
      <div v-if="open" class="inventory-panel">
        <h2>Inventory</h2>
        <div v-if="Object.keys(inventory).length" class="inventory-list">
          <div v-for="(quantity, name) in inventory" :key="name" class="inventory-item">
            <span class="item-name">{{ name }}</span>
            <span class="item-quantity">x{{ quantity }}</span>
          </div>
        </div>
        <div v-else class="empty-message">
          Your pockets are empty...
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.inventory-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #222;
  color: #f87171;
  border: 2px solid #f87171;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.inventory-toggle:hover {
  background-color: #333;
  transform: scale(1.05);
}

.inventory-panel {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 260px;
  background-color: #1e1e1e;
  color: #f0f0f0;
  border: 1px solid #444;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

.inventory-panel h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #f87171;
}

.inventory-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.inventory-item {
  display: flex;
  justify-content: space-between;
  background-color: #2a2a2a;
  padding: 6px 10px;
  border-radius: 6px;
}

.item-name {
  font-weight: bold;
}

.item-quantity {
  color: #f87171;
}

.empty-message {
  font-style: italic;
  font-size: 14px;
  color: #999;
}

.inventory-fade-enter-active,
.inventory-fade-leave-active {
  transition: all 0.3s ease;
}
.inventory-fade-enter-from,
.inventory-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
