<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'accent' | 'outline' | 'outline-light'

interface Props {
  href: string
  variant?: Variant
}

const { href, variant = 'accent' } = defineProps<Props>()

const VARIANT_CLASSES: Record<Variant, string> = {
  accent: 'bg-accent text-navy hover:bg-accent-hover',
  outline: 'border-[1.5px] border-line-strong text-navy hover:border-navy',
  'outline-light': 'border-[1.5px] border-white text-white hover:bg-white/10',
}

const variantClass = computed(() => VARIANT_CLASSES[variant])
</script>

<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center gap-2.5 rounded-full px-5.5 font-medium whitespace-nowrap no-underline transition-colors"
    :class="variantClass"
  >
    <slot />
  </a>
</template>
