<script setup lang="ts">
const { t } = useI18n()

const POINTS = ['context', 'sources', 'honest', 'variants'] as const

const points = computed(() =>
  POINTS.map((key) => ({
    key,
    title: t(`meepy.points.${key}.title`),
    text: t(`meepy.points.${key}.text`),
  })),
)
</script>

<template>
  <LandingSection id="meepy" tone="navy">
    <div class="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:items-center lg:gap-16">
      <div class="flex flex-col gap-6 lg:flex-[1_1_460px]">
        <LandingMascot :label="t('brand.mascot')" class="size-22 lg:size-28" />
        <LandingSectionHeading :eyebrow="t('meepy.eyebrow')" :title="t('meepy.title')" tone="dark" />
        <ul class="m-0 mt-2 flex list-none flex-col gap-5.5 p-0">
          <li v-for="point in points" :key="point.key" class="flex gap-3.5">
            <span aria-hidden="true" class="bg-sun text-navy flex size-8 shrink-0 items-center justify-center rounded-full">
              <UiBaseIcon name="check" :size="18" :stroke-width="2.6" />
            </span>
            <span class="flex flex-col gap-1">
              <span class="text-lg font-semibold text-white">{{ point.title }}</span>
              <span class="text-navy-soft text-base leading-normal">{{ point.text }}</span>
            </span>
          </li>
        </ul>
      </div>
      <LandingMeepyChat />
    </div>
  </LandingSection>
</template>
