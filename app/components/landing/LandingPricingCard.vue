<script setup lang="ts">
interface Props {
  name: string
  price: string
  period?: string
  text: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  badge?: string
  highlighted?: boolean
}

const { name, price, period = '', text, features, ctaLabel, ctaHref, badge = '', highlighted = false } = defineProps<Props>()
</script>

<template>
  <article
    class="flex flex-col gap-5.5 rounded-[28px] bg-white px-5.5 py-6.5 lg:p-9"
    :class="highlighted ? 'border-navy border-2' : 'border-line border'"
  >
    <div class="flex items-center justify-between">
      <h3 class="font-display text-navy m-0 text-2xl font-medium">{{ name }}</h3>
      <span
        v-if="badge"
        class="bg-sun border-navy text-navy flex h-7 items-center rounded-full border-[1.5px] px-3 text-[13px] font-semibold"
      >
        {{ badge }}
      </span>
    </div>
    <div class="flex items-baseline gap-1.5">
      <span class="font-display text-navy text-[44px] font-semibold">{{ price }}</span>
      <span v-if="period" class="text-ink-muted text-[15px]">{{ period }}</span>
    </div>
    <p class="text-ink-muted -mt-2 mb-0 text-[15px]">{{ text }}</p>
    <LandingCheckList :items="features" />
    <UiBaseButtonLink :href="ctaHref" :variant="highlighted ? 'accent' : 'outline'" class="mt-auto h-13.5 text-base">
      {{ ctaLabel }}
    </UiBaseButtonLink>
  </article>
</template>
