<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="download" class="bg-navy scroll-mt-4 px-5 py-14 lg:px-12 lg:py-24">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-12">
      <div class="flex flex-col gap-4.5 lg:flex-row lg:items-center lg:gap-7">
        <LandingMascot :label="t('brand.mascot')" class="size-24 lg:size-30" />
        <div class="flex flex-col gap-2.5">
          <h2 class="font-display m-0 text-[34px] leading-[1.1] font-medium tracking-[-0.5px] text-white lg:text-5xl">
            {{ t('download.title') }}
          </h2>
          <p class="text-navy-soft m-0 text-base leading-normal lg:text-lg">{{ t('download.text') }}</p>
        </div>
      </div>
      <LandingStoreButtons tone="dark" />
    </div>
  </section>
</template>
