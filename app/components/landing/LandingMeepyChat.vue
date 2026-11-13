<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <!-- Static illustration of a conversation with Meepy -->
  <div class="bg-page flex flex-col gap-3.5 rounded-4xl px-4 py-5 lg:flex-[1_1_440px] lg:p-7">
    <div class="border-line flex flex-wrap items-center gap-3 border-b pb-3.5">
      <LandingMascot tone="mist" :label="t('brand.mascot')" class="size-12" />
      <span class="flex flex-col">
        <span class="font-display text-navy text-xl font-medium">{{ t('meepy.chat.name') }}</span>
        <span class="text-ink-muted text-[13px]">{{ t('meepy.chat.tagline') }}</span>
      </span>
      <span
        class="border-line text-navy flex h-7 items-center gap-1.5 rounded-full border bg-white px-3 text-[12.5px] font-medium whitespace-nowrap lg:ml-auto"
      >
        <span aria-hidden="true" class="bg-accent size-[7px] rounded-full" />
        {{ t('meepy.chat.game') }}
      </span>
    </div>

    <p class="bubble-user">{{ t('meepy.chat.question1') }}</p>
    <div class="flex items-end gap-2.5">
      <LandingMascot variant="avatar" tone="mist" class="size-7.5" />
      <div class="bubble-meepy">
        <p class="m-0">{{ t('meepy.chat.answer1') }}</p>
        <span class="tag bg-cream text-cream-ink">
          <UiBaseIcon name="warning" :size="15" />
          {{ t('meepy.chat.unspecified') }}
        </span>
        <div class="flex flex-wrap gap-2">
          <span class="bg-accent text-navy flex h-10 items-center rounded-full px-4 text-sm font-medium">
            {{ t('meepy.chat.optionExtra') }}
          </span>
          <span
            class="border-line-strong text-navy flex h-10 items-center rounded-full border-[1.5px] px-4 text-sm font-medium"
          >
            {{ t('meepy.chat.optionShared') }}
          </span>
        </div>
      </div>
    </div>

    <p class="bubble-user">{{ t('meepy.chat.question2') }}</p>
    <div class="flex items-end gap-2.5">
      <LandingMascot variant="avatar" tone="mist" class="size-7.5" />
      <div class="bubble-meepy">
        <p class="m-0">{{ t('meepy.chat.answer2') }}</p>
        <span class="tag bg-mist text-navy">
          <UiBaseIcon name="book" :size="15" />
          {{ t('meepy.chat.source') }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference '../../assets/main.css';

.bubble-user {
  @apply bg-navy m-0 max-w-[80%] self-end rounded-[22px_22px_6px_22px] px-4 py-3 text-[15px] leading-5.5 text-white;
}

.bubble-meepy {
  @apply border-line text-ink flex flex-col gap-2.5 rounded-[22px_22px_22px_6px] border bg-white px-4 py-3.5 text-[15px] leading-5.5;
}

.tag {
  @apply flex h-7 items-center gap-1.5 self-start rounded-lg px-2.5 text-[13px] font-medium;
}
</style>
