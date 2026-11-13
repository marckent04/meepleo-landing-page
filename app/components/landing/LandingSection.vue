<script setup lang="ts">
type Tone = 'page' | 'white' | 'navy'

interface Props {
  id?: string
  tone?: Tone
}

const { id = undefined, tone = 'white' } = defineProps<Props>()

const TONE_CLASSES: Record<Tone, string> = {
  page: 'bg-page',
  white: 'bg-white',
  navy: 'bg-navy',
}

const toneClass = computed(() => TONE_CLASSES[tone])
</script>

<template>
  <section :id="id" class="scroll-mt-4 px-5 py-14 lg:px-12 lg:py-28" :class="toneClass">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-8 lg:gap-14">
      <slot />
    </div>
  </section>
</template>
