import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BasePhoneFrame from './BasePhoneFrame.vue'

describe('BasePhoneFrame', () => {
  it('renders the screenshot lazily by default', () => {
    const wrapper = mount(BasePhoneFrame, { props: { src: '/screens/play.jpg', alt: 'Play screen' } })
    const img = wrapper.get('img')
    expect(img.attributes('src')).toBe('/screens/play.jpg')
    expect(img.attributes('alt')).toBe('Play screen')
    expect(img.attributes('loading')).toBe('lazy')
  })

  it('loads eagerly when asked', () => {
    const wrapper = mount(BasePhoneFrame, { props: { src: '/a.jpg', alt: 'A', eager: true } })
    expect(wrapper.get('img').attributes('loading')).toBe('eager')
  })
})
