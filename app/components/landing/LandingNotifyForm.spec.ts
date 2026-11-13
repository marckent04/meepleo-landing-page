// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import LandingNotifyForm from './LandingNotifyForm.vue'

describe('LandingNotifyForm', () => {
  it('shows a confirmation once the e-mail is submitted', async () => {
    const wrapper = await mountSuspended(LandingNotifyForm)
    const input = wrapper.get('input[type="email"]')

    expect(wrapper.find(`label[for="${input.attributes('id')}"]`).exists()).toBe(true)
    expect(wrapper.find('[role="status"]').exists()).toBe(false)

    await input.setValue('ada@example.com')
    await wrapper.get('form').trigger('submit')

    expect(wrapper.find('form').exists()).toBe(false)
    expect(wrapper.get('[role="status"]').text()).toMatch(/C’est noté|Got it/)
  })
})
