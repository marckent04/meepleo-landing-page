import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useWaitlistStore } from './waitlist'

describe('waitlist store', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('starts unsubscribed', () => {
    expect(useWaitlistStore().subscribed).toBe(false)
  })

  it('records the address on subscribe', () => {
    const store = useWaitlistStore()
    store.subscribe('ada@example.com')
    expect(store.subscribed).toBe(true)
    expect(store.email).toBe('ada@example.com')
  })
})
