<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
})
</script>

<template>
  <div>
    <LandingHeader />
    <main>
      <LandingHero />
      <LandingFeatures />
      <LandingMeepy />
      <LandingPrepare />
      <LandingCollection />
      <LandingPricing />
      <LandingFaq />
      <LandingDownload />
    </main>
    <LandingFooter />
  </div>
</template>
