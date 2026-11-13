// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import LandingHeader from './LandingHeader.vue'

describe('LandingHeader', () => {
  it('opens and closes the mobile menu', async () => {
    const wrapper = await mountSuspended(LandingHeader)
    const button = wrapper.get('button[aria-controls="mobile-menu"]')
    const menu = wrapper.get<HTMLElement>('#mobile-menu')

    expect(button.attributes('aria-expanded')).toBe('false')
    expect(menu.element.style.display).toBe('none')

    await button.trigger('click')
    expect(button.attributes('aria-expanded')).toBe('true')
    expect(menu.element.style.display).toBe('')

    await menu.get('a[href="#faq"]').trigger('click')
    expect(button.attributes('aria-expanded')).toBe('false')
  })

  it('links every section from the navigation', async () => {
    const wrapper = await mountSuspended(LandingHeader)
    const hrefs = wrapper.findAll('#mobile-menu a').map((a) => a.attributes('href'))
    expect(hrefs).toEqual(['#features', '#meepy', '#collection', '#pricing', '#faq', '#download'])
  })
})
