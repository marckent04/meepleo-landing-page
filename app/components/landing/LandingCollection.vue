<script setup lang="ts">
const { t } = useI18n()

const CARDS = [
  { key: 'games', image: '/screens/library.jpg', tint: 'bg-mist' },
  { key: 'table', image: '/screens/table.jpg', tint: 'bg-cream' },
] as const

const cards = computed(() =>
  CARDS.map(({ key, image, tint }) => ({
    key,
    image,
    tint,
    eyebrow: t(`collection.${key}.eyebrow`),
    title: t(`collection.${key}.title`),
    text: t(`collection.${key}.text`),
    points: [t(`collection.${key}.point1`), t(`collection.${key}.point2`)],
    alt: t(`collection.${key}.alt`),
  })),
)
</script>

<template>
  <LandingSection id="collection" tone="white">
    <LandingSectionHeading :eyebrow="t('collection.eyebrow')" :title="t('collection.title')" />
    <div class="grid gap-5 lg:grid-cols-2 lg:gap-6">
      <article
        v-for="card in cards"
        :key="card.key"
        class="border-line flex flex-col overflow-hidden rounded-4xl border bg-white lg:flex-row"
      >
        <div class="flex flex-col gap-3.5 px-5.5 py-6.5 lg:flex-1 lg:px-8 lg:py-9">
          <span class="text-ink-muted text-[13px] font-semibold tracking-[1.2px] uppercase">{{ card.eyebrow }}</span>
          <h3 class="font-display text-navy m-0 text-2xl leading-[1.2] font-medium lg:text-[28px]">{{ card.title }}</h3>
          <p class="text-ink-muted m-0 text-base leading-[1.55]">{{ card.text }}</p>
          <LandingCheckList :items="card.points" class="mt-1" />
        </div>
        <div class="flex h-85 shrink-0 justify-center overflow-hidden pt-7 lg:h-105 lg:w-57.5" :class="card.tint">
          <UiBasePhoneFrame :src="card.image" :alt="card.alt" class="w-57.5 lg:w-50" />
        </div>
      </article>
    </div>
  </LandingSection>
</template>
