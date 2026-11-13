<script setup lang="ts">
interface Props {
  /** `face`: full Meepy with eyes and cap; `avatar`: small chat avatar. */
  variant?: 'face' | 'avatar'
  /** Background disc color. */
  tone?: 'white' | 'mist'
  /** Accessible label; omit to make the mascot decorative. */
  label?: string
}

const { variant = 'face', tone = 'white', label = '' } = defineProps<Props>()

const discClass = computed(() => (tone === 'white' ? 'fill-white' : 'fill-mascot'))
</script>

<template>
  <svg
    v-if="variant === 'face'"
    viewBox="0 0 120 120"
    :role="label ? 'img' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : 'true'"
    class="block shrink-0"
  >
    <circle cx="60" cy="64" r="54" :class="discClass" />
    <g transform="translate(8 14) scale(4.3)">
      <path :d="MEEPLE_PATH" class="fill-sun stroke-navy" stroke-width="0.55" stroke-linejoin="round" />
      <circle cx="10.9" cy="5" r="0.45" class="fill-navy" />
      <circle cx="13.1" cy="5" r="0.45" class="fill-navy" />
      <path d="M10.7 6.1 q1.3 1.3 2.6 0" class="stroke-navy" stroke-width="0.4" fill="none" stroke-linecap="round" />
      <circle cx="9.9" cy="6" r="0.5" class="fill-accent" opacity="0.7" />
      <circle cx="14.1" cy="6" r="0.5" class="fill-accent" opacity="0.7" />
      <rect
        x="10.4"
        y="-0.9"
        width="3.2"
        height="2.2"
        rx="0.5"
        class="fill-accent stroke-navy"
        stroke-width="0.45"
        transform="rotate(-8 12 0.2)"
      />
      <circle cx="12" cy="0.2" r="0.3" class="fill-white" />
    </g>
  </svg>
  <svg v-else viewBox="0 0 24 24" aria-hidden="true" class="block shrink-0">
    <circle cx="12" cy="12" r="12" :class="discClass" />
    <g transform="translate(3 3) scale(0.75)">
      <path :d="MEEPLE_PATH" class="fill-sun stroke-navy" stroke-width="1.1" stroke-linejoin="round" />
    </g>
  </svg>
</template>
