import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseButtonLink from './BaseButtonLink.vue'

describe('BaseButtonLink', () => {
  it('renders a link with its slot', () => {
    const wrapper = mount(BaseButtonLink, { props: { href: '#download' }, slots: { default: 'Get the app' } })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('#download')
    expect(wrapper.text()).toBe('Get the app')
  })

  it('applies the outline variant', () => {
    const wrapper = mount(BaseButtonLink, { props: { href: '#', variant: 'outline' } })
    expect(wrapper.classes()).toContain('border-line-strong')
  })
})
