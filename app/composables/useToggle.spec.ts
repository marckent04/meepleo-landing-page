import { describe, expect, it } from 'vitest'
import { useToggle } from './useToggle'

describe('useToggle', () => {
  it('flips the value', () => {
    const { value, toggle } = useToggle()
    toggle()
    expect(value.value).toBe(true)
  })
})
