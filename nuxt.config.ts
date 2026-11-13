import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: { strict: true },
  runtimeConfig: {
    public: {
      // NUXT_PUBLIC_STORES_ENABLED=true shows the store buttons; otherwise the "get notified" form is shown.
      // Read at `pnpm generate` time for the static build.
      storesEnabled: false,
    },
  },
  // Static site generation (landing page)
  ssr: true,
  nitro: {
    prerender: { routes: ['/fr', '/en'] },
  },
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.ts' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})
