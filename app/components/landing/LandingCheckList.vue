<script setup lang="ts">
interface Props {
  items: string[]
}

const { items } = defineProps<Props>()
</script>

<template>
  <ul class="m-0 flex list-none flex-col gap-3 p-0">
    <li v-for="item in items" :key="item" class="text-ink flex items-start gap-2.5 text-[15.5px] leading-[1.45]">
      <UiBaseIcon name="check" :size="18" :stroke-width="2.4" class="text-teal mt-px" />
      {{ item }}
    </li>
  </ul>
</template>
