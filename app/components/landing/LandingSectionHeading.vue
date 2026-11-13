<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  /** `dark` for headings on the navy background. */
  tone?: 'light' | 'dark'
  centered?: boolean
}

const { eyebrow = '', title, tone = 'light', centered = false } = defineProps<Props>()
</script>

<template>
  <div class="flex max-w-[720px] flex-col gap-4" :class="{ 'lg:mx-auto lg:items-center lg:text-center': centered }">
    <span
      v-if="eyebrow"
      class="text-[13px] font-semibold tracking-[1.2px] uppercase"
      :class="tone === 'dark' ? 'text-sun' : 'text-ink-muted'"
    >
      {{ eyebrow }}
    </span>
    <h2
      class="font-display m-0 text-[34px] leading-[1.1] font-medium tracking-[-0.5px] lg:text-5xl"
      :class="tone === 'dark' ? 'text-white' : 'text-navy'"
    >
      {{ title }}
    </h2>
  </div>
</template>
