import { ref } from 'vue'
import { defineStore } from 'pinia'

/** Release waitlist: people asking to be notified when the app is out. */
export const useWaitlistStore = defineStore('waitlist', () => {
  const email = ref('')
  const subscribed = ref(false)

  // TODO: send the address to the waitlist backend once the API layer exists.
  const subscribe = (address: string) => {
    email.value = address
    subscribed.value = true
  }

  return { email, subscribed, subscribe }
})
