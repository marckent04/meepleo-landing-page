<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit'
}

const { type = 'button' } = defineProps<Props>()
const emit = defineEmits<{ click: [] }>()
</script>

<template>
  <button
    :type="type"
    class="bg-primary hover:bg-primary-hover rounded-lg px-5 py-2.5 font-medium text-white"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
