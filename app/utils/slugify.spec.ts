import { describe, expect, it } from 'vitest'
import { slugify } from './slugify'

describe('slugify', () => {
  it('removes accents and separators', () => {
    expect(slugify('Été   chaud!')).toBe('ete-chaud')
  })
})
