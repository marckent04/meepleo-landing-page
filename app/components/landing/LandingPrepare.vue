<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <LandingSection tone="page">
    <div class="flex flex-col gap-7 lg:flex-row lg:flex-wrap lg:items-center lg:gap-16">
      <div class="flex flex-col gap-4.5 lg:flex-[1_1_440px]">
        <LandingSectionHeading :eyebrow="t('prepare.eyebrow')" :title="t('prepare.title')" />
        <p class="text-ink-muted m-0 text-[17px] leading-relaxed lg:text-lg">{{ t('prepare.text') }}</p>
      </div>

      <!-- Static illustration of a game being prepared by Meepy -->
      <div class="flex flex-col gap-3.5 lg:flex-[1_1_440px]">
        <div class="flex items-center gap-3">
          <span
            aria-hidden="true"
            class="bg-mint text-teal-ink font-display flex size-13 items-center justify-center rounded-[14px] text-lg font-semibold"
          >
            {{ t('prepare.game.initials') }}
          </span>
          <span class="flex flex-col">
            <span class="text-ink text-lg font-semibold">{{ t('prepare.game.name') }}</span>
            <span class="text-ink-muted text-sm">{{ t('prepare.game.meta') }}</span>
          </span>
        </div>
        <ol class="border-line m-0 list-none rounded-3xl border bg-white p-0">
          <li class="border-line flex gap-3.5 border-b px-5 py-4.5">
            <span aria-hidden="true" class="bg-teal flex size-8 shrink-0 items-center justify-center rounded-full text-white">
              <UiBaseIcon name="check" :size="18" :stroke-width="2.6" />
            </span>
            <span class="flex flex-1 flex-col gap-[3px]">
              <span class="flex justify-between gap-3">
                <span class="text-ink text-[17px] font-semibold">{{ t('prepare.steps.sheet.title') }}</span>
                <span class="text-teal-ink text-[13px] font-semibold">{{ t('prepare.steps.sheet.status') }}</span>
              </span>
              <span class="text-ink-muted text-sm">{{ t('prepare.steps.sheet.text') }}</span>
            </span>
          </li>
          <li class="flex gap-3.5 px-5 py-4.5">
            <span
              aria-hidden="true"
              class="bg-navy font-display flex size-8 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold text-white"
            >
              2
            </span>
            <span class="flex flex-1 flex-col gap-[3px]">
              <span class="flex justify-between gap-3">
                <span class="text-ink text-[17px] font-semibold">{{ t('prepare.steps.score.title') }}</span>
                <span class="text-navy text-[13px] font-semibold">{{ t('prepare.steps.score.status') }}</span>
              </span>
              <span class="text-ink-muted text-sm">{{ t('prepare.steps.score.text') }}</span>
              <span aria-hidden="true" class="bg-mist relative mt-2.5 block h-1.5 overflow-hidden rounded-full">
                <span class="bg-navy absolute inset-y-0 left-[22%] w-[38%] rounded-full" />
              </span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </LandingSection>
</template>
