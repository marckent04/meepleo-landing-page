/** Whether the app is live on the stores (`NUXT_PUBLIC_STORES_ENABLED`). */
export function useStoresEnabled() {
  const config = useRuntimeConfig()
  const storesEnabled = computed(() => config.public.storesEnabled === true)
  return { storesEnabled }
}
