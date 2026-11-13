<script setup lang="ts">
const { t } = useI18n()
const { storesEnabled } = useStoresEnabled()

const freeFeatures = computed(() => [1, 2, 3, 4, 5].map((n) => t(`pricing.free.feature${n}`)))
const premiumFeatures = computed(() => [1, 2, 3, 4].map((n) => t(`pricing.premium.feature${n}`)))
const freeCta = computed(() => (storesEnabled.value ? t('pricing.free.cta') : t('pricing.notifyCta')))
const premiumCta = computed(() => (storesEnabled.value ? t('pricing.premium.cta') : t('pricing.notifyCta')))
</script>

<template>
  <LandingSection id="pricing" tone="page">
    <LandingSectionHeading :eyebrow="t('pricing.eyebrow')" :title="t('pricing.title')" centered />
    <div class="mx-auto grid w-full max-w-[880px] gap-5 lg:grid-cols-2 lg:gap-6">
      <LandingPricingCard
        :name="t('pricing.free.name')"
        :price="t('pricing.free.price')"
        :period="t('pricing.free.period')"
        :text="t('pricing.free.text')"
        :features="freeFeatures"
        :cta-label="freeCta"
        cta-href="#download"
      />
      <LandingPricingCard
        :name="t('pricing.premium.name')"
        :badge="t('pricing.premium.badge')"
        :price="t('pricing.premium.price')"
        :period="t('pricing.premium.period')"
        :text="t('pricing.premium.text')"
        :features="premiumFeatures"
        :cta-label="premiumCta"
        cta-href="#download"
        highlighted
      />
    </div>
  </LandingSection>
</template>
