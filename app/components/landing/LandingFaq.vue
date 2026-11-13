<script setup lang="ts">
const { t } = useI18n()
const { storesEnabled } = useStoresEnabled()

const QUESTIONS = ['friends', 'missing', 'mistakes', 'scoring'] as const

const questions = computed(() =>
  (storesEnabled.value ? QUESTIONS : (['release', ...QUESTIONS] as const)).map((key) => ({
    key,
    question: t(`faq.${key}.question`),
    answer: t(`faq.${key}.answer`),
  })),
)
</script>

<template>
  <LandingSection id="faq" tone="white">
    <div class="flex flex-col gap-4 lg:flex-row lg:gap-16">
      <div class="lg:flex-[1_1_320px]">
        <LandingSectionHeading :eyebrow="t('faq.eyebrow')" :title="t('faq.title')" />
      </div>
      <div class="flex flex-col lg:flex-[2_1_560px]">
        <div
          v-for="item in questions"
          :key="item.key"
          class="border-line flex flex-col gap-2 border-b py-5 last:border-b-0 lg:py-6.5"
        >
          <h3 class="text-ink m-0 text-[17px] font-semibold lg:text-[19px]">{{ item.question }}</h3>
          <p class="text-ink-muted m-0 text-base leading-relaxed">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </LandingSection>
</template>
