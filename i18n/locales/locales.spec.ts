import { describe, expect, it } from 'vitest'
import en from './en'
import fr from './fr'

const flatten = (obj: Record<string, unknown>, prefix = ''): string[] =>
  Object.entries(obj).flatMap(([key, value]) =>
    typeof value === 'object' && value !== null
      ? flatten(value as Record<string, unknown>, `${prefix}${key}.`)
      : [`${prefix}${key}`],
  )

describe('i18n locales', () => {
  it('have the same keys in fr and en', () => {
    expect(flatten(fr).sort()).toEqual(flatten(en).sort())
  })
})
