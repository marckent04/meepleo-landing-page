<script setup lang="ts">
import { computed } from 'vue'

export type IconName = 'check' | 'phone' | 'menu' | 'close' | 'warning' | 'book'

interface Props {
  name: IconName
  size?: number
  strokeWidth?: number
}

const { name, size = 24, strokeWidth = 2 } = defineProps<Props>()

const PATHS: Record<IconName, string[]> = {
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  phone: ['M9 2h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z', 'M11 18h2'],
  menu: ['M4 7h16M4 12h16M4 17h16'],
  close: ['M6 6l12 12M18 6L6 18'],
  warning: ['M12 3l9 16H3z', 'M12 10v4'],
  book: ['M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM19 19v2H6'],
}

const paths = computed(() => PATHS[name])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="shrink-0"
  >
    <path v-for="d in paths" :key="d" :d="d" />
  </svg>
</template>
