<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: { lang: locale },
  meta: [{ name: 'theme-color', content: '#1D3557' }],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
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
