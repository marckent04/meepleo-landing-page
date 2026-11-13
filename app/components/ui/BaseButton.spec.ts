import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders its slot and emits click', async () => {
    const wrapper = mount(BaseButton, { slots: { default: 'Go' } })
    expect(wrapper.text()).toBe('Go')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
