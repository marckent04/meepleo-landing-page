<script setup lang="ts">
const { t } = useI18n()

const FEATURES = [
  { key: 'setup', image: '/screens/setup.jpg', tint: 'bg-peach' },
  { key: 'assistant', image: '/screens/assistant.jpg', tint: 'bg-cream' },
  { key: 'score', image: '/screens/score.jpg', tint: 'bg-mint' },
] as const

const features = computed(() =>
  FEATURES.map(({ key, image, tint }) => ({
    key,
    image,
    tint,
    eyebrow: t(`features.${key}.eyebrow`),
    title: t(`features.${key}.title`),
    text: t(`features.${key}.text`),
    alt: t(`features.${key}.alt`),
  })),
)
</script>

<template>
  <LandingSection id="features" tone="white">
    <LandingSectionHeading :eyebrow="t('features.eyebrow')" :title="t('features.title')" />
    <div class="grid gap-5 lg:grid-cols-3 lg:gap-6">
      <article
        v-for="feature in features"
        :key="feature.key"
        class="border-line flex flex-col overflow-hidden rounded-[28px] border bg-white"
      >
        <div class="flex h-90 justify-center overflow-hidden pt-7 lg:h-95" :class="feature.tint">
          <UiBasePhoneFrame :src="feature.image" :alt="feature.alt" class="w-60 lg:w-62.5" />
        </div>
        <div class="flex flex-col gap-2.5 px-5.5 pt-5.5 pb-6.5 lg:px-7 lg:pt-7 lg:pb-8">
          <span class="text-ink-muted text-[13px] font-semibold tracking-[1.2px] uppercase">{{ feature.eyebrow }}</span>
          <h3 class="font-display text-navy m-0 text-[23px] leading-[1.2] font-medium lg:text-[26px]">
            {{ feature.title }}
          </h3>
          <p class="text-ink-muted m-0 text-base leading-[1.55]">{{ feature.text }}</p>
        </div>
      </article>
    </div>
  </LandingSection>
</template>
