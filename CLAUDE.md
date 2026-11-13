# meepleo-landing-page

Meepleo landing page. Nuxt 4, statically generated (`pnpm generate`), bilingual fr/en. No API layer yet (add REST/GraphQL later following the team conventions).

## Design

The design lives in Claude Design: https://claude.ai/code/artifact/b88bd578-3f4c-4c9b-af21-2da2d03c6c60 (page "Landing"). Read it with the Artifact tool (`action: "read"`) and follow it when building or changing the landing page.

## Stack

Nuxt 4 · Vue 3.5 (Composition API, `<script setup lang="ts">`) · TypeScript strict (pinned to 6.x: vue-tsc and typescript-eslint do not support TS 7 yet) · Pinia (`@pinia/nuxt`, setup stores) · Tailwind CSS v4 (`@tailwindcss/vite`, tokens in `@theme` of `app/assets/main.css`) · `@nuxtjs/i18n` · Vitest + `@vue/test-utils` · ESLint flat (`@nuxt/eslint`) + Prettier. Package manager: **pnpm only**.

## Commands

```bash
pnpm dev | build | generate | preview
pnpm type-check     # nuxt typecheck
pnpm lint | lint:fix
pnpm test | test:run
```

Definition of done: `pnpm type-check && pnpm lint && pnpm test:run` must pass.

## Structure

```
app/                 assets/ components/(ui/) composables/ layouts/ pages/ stores/ utils/ types/
                     (later: features/<domain>/{components,composables,store.ts,api.ts,types.ts}, services/)
i18n/locales/        fr.ts, en.ts (same keys, enforced by locales.spec.ts)
```

Specs live next to the code (`*.spec.ts`).

## Vue rules

- `<script setup lang="ts">` only, no Options API. SFC order: script, template, style scoped. PascalCase multi-word file names. Component > ~200 lines: split or extract a composable.
- Script order: imports, props/emits/model, stores & composables, state, computed, watch, functions, lifecycle, defineExpose.
- Props via typed interface, defaults by reactive destructuring; typed emits; `defineModel<T>()`; never mutate props.
- `ref()` by default; derived state is `computed`, never a `watch` copy; `storeToRefs()` for stores; `useTemplateRef()`; clean up timers/listeners/requests.
- Composables: `useXxx.ts`, named export, accept `MaybeRefOrGetter` + `toValue()`, return an object of refs, no module-level side effects.
- Templates: stable `:key`, no `v-if` with `v-for` on the same element, no complex logic (use `computed`), kebab-case events, no `v-html` unless sanitized.
- Pinia: setup syntax, one store per domain, no network calls in components.
- Styles: Tailwind mobile-first, desktop via `lg:`; `<style scoped>` only if utilities are not enough.

## Nuxt rules

- File-based routing in `app/pages/`. Localized routes `/fr/…`, `/en/…` (`strategy: 'prefix'`); `/` redirects by browser language.
- No hard-coded text in templates: use `useI18n()` and keys in `i18n/locales/{fr,en}.ts`.
- Auto-imports are allowed for `composables/`, `utils/`, `components/`; use explicit imports for `features/**` and `stores/**`, and `import type` for types.
- No module-level shared state (SSR pollution): use `useState` or Pinia. Guard browser APIs with `import.meta.client` or `onMounted`.
- Runtime config via `runtimeConfig` (`NUXT_PUBLIC_*`), not `import.meta.env.VITE_*`.
- SEO: `useHead` / `useSeoMeta`, `lang` set per locale.
- If an API is added: client in a `plugins/api.ts` (`$api`), called via `useAsyncData(key, …)`; every call takes an `AbortSignal`; send `Accept-Language`; base URL from env; validate external data at the boundary.

## TypeScript

No `any` (use `unknown` and narrow); `import type` for type-only imports. Boundary validation with **Zod** only (no Valibot); add it with the API layer, not installed yet. No E2E tool (no Playwright/Cypress), no pre-commit hooks (no Husky/lint-staged), no Storybook/Histoire.

## Tests

Test visible behavior (rendering, emitted events). Composables are tested directly (lifecycle ones through a host component). Pinia: `createTestingPinia()` in component tests. Keep the fr/en key-parity test passing. Tests needing the Nuxt runtime use `// @vitest-environment nuxt`.

## Rules for Claude

- Read existing components/composables before creating new ones; reuse.
- Do not add a dependency without flagging it and explaining why.
- Do not change config (Nuxt, ESLint, tsconfig, Vitest) without asking.
- Minimal, targeted changes; no unrequested refactors.
- Conventional Commits, in English.
- Code comments, names, logs, test descriptions in English; only `i18n/locales/{fr,en}.ts` messages are translated.
