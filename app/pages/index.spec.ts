// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import IndexPage from './index.vue'

describe('landing page', () => {
  it('renders the hero title and every anchored section', async () => {
    const wrapper = await mountSuspended(IndexPage)
    // Locale files are precompiled by @nuxtjs/i18n in this environment, so compare against literals.
    expect(wrapper.get('h1').text()).toMatch(/Moins de livret,|Less rulebook,/)
    for (const id of ['features', 'meepy', 'collection', 'pricing', 'faq', 'download']) {
      expect(wrapper.find(`#${id}`).exists()).toBe(true)
    }
  })
})
