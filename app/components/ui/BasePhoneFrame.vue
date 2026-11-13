<script setup lang="ts">
interface Props {
  src: string
  alt: string
  eager?: boolean
}

const { src, alt, eager = false } = defineProps<Props>()
</script>

<template>
  <!-- Width is set by the parent through `class`; bezel and radii scale with it (container units). -->
  <div class="@container shrink-0">
    <div class="bg-navy shadow-phone rounded-[15.2cqw] p-[3.6cqw]">
      <img
        :src="src"
        :alt="alt"
        width="390"
        height="844"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        class="block aspect-[390/844] h-auto w-full rounded-[11.6cqw]"
      />
    </div>
  </div>
</template>
