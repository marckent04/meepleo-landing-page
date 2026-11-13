<script setup lang="ts">
const { t } = useI18n()
const { storesEnabled } = useStoresEnabled()
</script>

<template>
  <section class="bg-page overflow-hidden px-5 pt-9 pb-14 lg:px-12 lg:pt-18 lg:pb-24">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
      <div class="flex flex-col gap-5 lg:flex-[1_1_520px] lg:gap-7">
        <span
          class="border-line text-navy flex h-8.5 items-center gap-2 self-start rounded-full border bg-white px-3.5 text-[13.5px] font-medium"
        >
          <span aria-hidden="true" class="bg-sun ring-navy size-2 rounded-full ring-[1.5px]" />
          {{ t('hero.badge') }}
        </span>
        <h1
          class="font-display text-navy m-0 text-[44px] leading-[1.02] font-medium tracking-[-0.8px] lg:text-7xl lg:tracking-[-1.5px]"
        >
          <span class="block">{{ t('hero.titleLine1') }}</span>
          <span class="block">{{ t('hero.titleLine2') }}</span>
        </h1>
        <p class="text-ink-muted m-0 max-w-[520px] text-[17px] leading-[1.55] lg:text-xl">
          {{ t('hero.lead') }}
        </p>
        <template v-if="storesEnabled">
          <LandingStoreButtons />
          <span class="text-ink-muted text-sm">{{ t('hero.note') }}</span>
        </template>
        <template v-else>
          <span class="text-teal-ink flex items-center gap-2 self-start text-sm font-semibold">
            <span aria-hidden="true" class="bg-teal size-2 rounded-full" />
            {{ t('hero.soon') }}
          </span>
          <LandingNotifyForm />
        </template>
      </div>

      <div
        class="relative mt-2 flex min-h-140 items-center justify-center lg:mt-0 lg:min-h-160 lg:flex-[1_1_460px]"
      >
        <div aria-hidden="true" class="bg-cream absolute size-82.5 rounded-full lg:size-130" />
        <div class="relative flex items-center">
          <div class="mt-17.5 -mr-15 lg:mt-22.5 lg:-mr-17.5">
            <UiBasePhoneFrame
              src="/screens/score.jpg"
              :alt="t('hero.scoreAlt')"
              eager
              class="w-40 -rotate-6 lg:w-62.5"
            />
          </div>
          <UiBasePhoneFrame
            src="/screens/play.jpg"
            :alt="t('hero.playAlt')"
            eager
            class="relative w-50 rotate-3 lg:w-72.5"
          />
        </div>
        <div
          aria-hidden="true"
          class="bg-navy absolute top-0 left-0 max-w-[180px] rounded-[18px_18px_6px_18px] px-4 py-3 text-[13px] leading-[1.4] text-white lg:top-10 lg:max-w-[220px] lg:text-sm"
        >
          {{ t('hero.question') }}
        </div>
        <div
          aria-hidden="true"
          class="absolute bottom-7.5 left-0 flex w-55 items-end gap-2.5 lg:bottom-24 lg:-left-10 lg:w-67.5"
        >
          <LandingMascot variant="avatar" tone="mist" class="size-9" />
          <span
            class="border-line text-ink rounded-[18px_18px_18px_6px] border bg-white px-3.5 py-3 text-[13px] leading-[1.4] lg:text-sm"
          >
            {{ t('hero.answer') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
