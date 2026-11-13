<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <a
    href="#top"
    :aria-label="t('brand.home')"
    class="text-navy flex items-center gap-2.5 no-underline"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" class="size-7.5 lg:size-8.5">
      <rect width="24" height="24" rx="7" class="fill-navy" />
      <g transform="translate(3.6 4.2) scale(0.7)">
        <path
          :d="MEEPLE_PATH"
          class="fill-sun stroke-navy"
          stroke-width="0.9"
          stroke-linejoin="round"
        />
      </g>
    </svg>
    <span class="font-display text-[22px] font-semibold tracking-[-0.3px] lg:text-[25px]">
      {{ t('brand.name') }}
    </span>
  </a>
</template>
