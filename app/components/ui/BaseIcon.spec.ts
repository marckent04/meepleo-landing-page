import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseIcon from './BaseIcon.vue'

describe('BaseIcon', () => {
  it('renders a decorative svg at the requested size', () => {
    const wrapper = mount(BaseIcon, { props: { name: 'phone', size: 20 } })
    expect(wrapper.attributes('aria-hidden')).toBe('true')
    expect(wrapper.attributes('width')).toBe('20')
    expect(wrapper.findAll('path')).toHaveLength(2)
  })
})
