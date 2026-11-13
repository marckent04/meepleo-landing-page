<script setup lang="ts">
const { t } = useI18n()

// TODO: point these to the real pages once they exist.
const LEGAL_LINKS = ['legal', 'privacy', 'terms', 'contact'] as const

const links = computed(() => LEGAL_LINKS.map((key) => ({ key, label: t(`footer.${key}`) })))
const copyright = computed(() => t('footer.copyright', { year: new Date().getFullYear() }))
</script>

<template>
  <footer class="border-line bg-page border-t px-5 py-8 lg:px-12 lg:py-10">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-5 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-6">
      <LandingLogo />
      <nav :aria-label="t('footer.label')" class="flex flex-wrap gap-x-5.5 gap-y-3.5 lg:gap-7">
        <a v-for="link in links" :key="link.key" href="#" class="text-ink hover:text-navy text-[14.5px] no-underline">
          {{ link.label }}
        </a>
      </nav>
      <span class="text-ink-muted text-sm">{{ copyright }}</span>
    </div>
  </footer>
</template>
