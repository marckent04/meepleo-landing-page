/** Meeple silhouette used by the logo and the Meepy mascot (24×24 viewBox). */
export const MEEPLE_PATH =
  'M12 2a3 3 0 0 1 3 3c0 1-.4 1.8-1 2.3l5.5 2.2c1 .4 1 1.8 0 2.2L16 12.8 19 21h-5l-2-4-2 4H5l3-8.2-3.5-1.1c-1-.4-1-1.8 0-2.2L10 7.3A3 3 0 0 1 12 2z'

/** In-page anchors linked from the header navigation, in display order. */
export const LANDING_NAV = ['features', 'meepy', 'collection', 'pricing', 'faq'] as const

// TODO: replace with the real App Store / Play Store URLs once the apps are published.
export const STORE_LINKS = { ios: '#', android: '#' } as const
