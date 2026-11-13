import { defineVitestConfig } from '@nuxt/test-utils/config'

// Plain happy-dom for unit tests; use `// @vitest-environment nuxt` in tests that need the Nuxt runtime
export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    include: ['app/**/*.spec.ts', 'i18n/**/*.spec.ts'],
  },
})
