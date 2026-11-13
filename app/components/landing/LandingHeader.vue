<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMenuStore } from '~/stores/menu'

const { t } = useI18n()
const menu = useMenuStore()
const { isOpen } = storeToRefs(menu)
const { storesEnabled } = useStoresEnabled()

const links = computed(() => LANDING_NAV.map((id) => ({ id, label: t(`nav.${id}`) })))
const menuLabel = computed(() => (isOpen.value ? t('nav.closeMenu') : t('nav.openMenu')))
const ctaLabel = computed(() => (storesEnabled.value ? t('nav.download') : t('nav.notify')))
</script>

<template>
  <header id="top" class="border-line bg-page border-b px-5 py-3.5 lg:px-12 lg:py-5">
    <div class="mx-auto flex max-w-[1200px] items-center justify-between gap-6">
      <LandingLogo />

      <nav :aria-label="t('nav.label')" class="hidden items-center gap-8 lg:flex">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`" class="text-ink hover:text-navy text-[15px] no-underline">
          {{ link.label }}
        </a>
      </nav>

      <UiBaseButtonLink href="#download" class="hidden h-12 text-[15px] lg:inline-flex">
        {{ ctaLabel }}
      </UiBaseButtonLink>

      <button
        type="button"
        :aria-label="menuLabel"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        class="border-line text-navy flex size-11 items-center justify-center rounded-full border bg-white lg:hidden"
        @click="menu.toggle"
      >
        <UiBaseIcon :name="isOpen ? 'close' : 'menu'" :size="22" />
      </button>
    </div>

    <nav
      v-show="isOpen"
      id="mobile-menu"
      :aria-label="t('nav.label')"
      class="mx-auto flex max-w-[1200px] flex-col gap-1 pt-4 pb-2 lg:hidden"
    >
      <a
        v-for="link in links"
        :key="link.id"
        :href="`#${link.id}`"
        class="text-ink flex h-12 items-center text-base no-underline"
        @click="menu.close"
      >
        {{ link.label }}
      </a>
      <UiBaseButtonLink href="#download" class="mt-2 h-12 text-[15px]" @click="menu.close">
        {{ ctaLabel }}
      </UiBaseButtonLink>
    </nav>
  </header>
</template>
