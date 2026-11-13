<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWaitlistStore } from '~/stores/waitlist'

interface Props {
  /** `dark` for the navy download band. */
  tone?: 'light' | 'dark'
}

const { tone = 'light' } = defineProps<Props>()
const { t } = useI18n()
const waitlist = useWaitlistStore()
const { subscribed } = storeToRefs(waitlist)

const id = useId()
const email = ref('')

const isDark = computed(() => tone === 'dark')

function onSubmit() {
  waitlist.subscribe(email.value)
}
</script>

<template>
  <div
    v-if="subscribed"
    role="status"
    class="bg-mint flex w-full max-w-135 items-center gap-3 rounded-[20px] px-4.5 py-3.5"
  >
    <UiBaseIcon name="check" :size="22" :stroke-width="2.6" class="text-teal" />
    <span class="flex flex-col gap-0.5">
      <span class="text-teal-ink text-base font-semibold">{{ t('notify.thanksTitle') }}</span>
      <span class="text-ink text-sm">{{ t('notify.thanksText') }}</span>
    </span>
  </div>

  <form
    v-else
    :aria-label="t('notify.formLabel')"
    class="flex w-full max-w-135 flex-col gap-2.5"
    @submit.prevent="onSubmit"
  >
    <label :for="`${id}-email`" class="text-[15px] font-semibold" :class="isDark ? 'text-white' : 'text-navy'">
      {{ t('notify.label') }}
    </label>
    <div class="flex flex-col gap-2 lg:flex-row lg:flex-wrap">
      <input
        :id="`${id}-email`"
        v-model.trim="email"
        type="email"
        required
        autocomplete="email"
        :placeholder="t('notify.placeholder')"
        :aria-describedby="`${id}-help`"
        class="border-line-strong text-ink h-14 w-full min-w-0 rounded-full border-[1.5px] bg-white px-5.5 text-base lg:w-auto lg:flex-[1_1_260px]"
      />
      <button
        type="submit"
        class="bg-accent text-navy hover:bg-accent-hover h-14 rounded-full px-6.5 text-base font-medium whitespace-nowrap transition-colors"
      >
        {{ t('notify.submit') }}
      </button>
    </div>
    <span :id="`${id}-help`" class="text-[13px] leading-[1.45]" :class="isDark ? 'text-navy-soft' : 'text-ink-muted'">
      {{ t('notify.help') }}
    </span>
  </form>
</template>
