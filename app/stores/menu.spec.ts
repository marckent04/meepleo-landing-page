import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useMenuStore } from './menu'

describe('menu store', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('toggles isOpen', () => {
    const store = useMenuStore()
    store.toggle()
    expect(store.isOpen).toBe(true)
  })

  it('closes the menu', () => {
    const store = useMenuStore()
    store.toggle()
    store.close()
    expect(store.isOpen).toBe(false)
  })
})
