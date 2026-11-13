<script setup lang="ts">
interface Props {
  /** `dark` for the navy download band. */
  tone?: 'light' | 'dark'
}

const { tone = 'light' } = defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-3 lg:flex-row lg:flex-wrap">
    <UiBaseButtonLink :href="STORE_LINKS.ios" class="h-14 w-full text-base lg:w-auto">
      <UiBaseIcon name="phone" :size="20" />
      {{ t('stores.ios') }}
    </UiBaseButtonLink>
    <UiBaseButtonLink
      :href="STORE_LINKS.android"
      :variant="tone === 'dark' ? 'outline-light' : 'outline'"
      class="h-14 w-full text-base lg:w-auto"
    >
      <UiBaseIcon name="phone" :size="20" />
      {{ t('stores.android') }}
    </UiBaseButtonLink>
  </div>
</template>
