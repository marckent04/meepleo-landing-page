import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const isOpen = ref(false)
  const toggle = () => {
    isOpen.value = !isOpen.value
  }
  const close = () => {
    isOpen.value = false
  }
  return { isOpen, toggle, close }
})
