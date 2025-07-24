//figured this out cux I am him bruh

import { reactive } from 'vue'

export const inventory = reactive({})

export function applyInventoryChanges(changes) {
  for (const { item, quantity } of changes) {
    if (!item || typeof quantity !== 'number') continue

    if (inventory[item]) {
      inventory[item] += quantity
    } else {
      inventory[item] = quantity
    }

    if (inventory[item] <= 0) {
      delete inventory[item]
    }
  }
}