<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: { lang: locale },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=DM+Sans:wght@400;500;600&display=swap',
    },
  ],
})
</script>

<template>
  <div class="bg-page text-ink min-h-screen overflow-x-hidden font-sans">
    <slot />
  </div>
</template>
