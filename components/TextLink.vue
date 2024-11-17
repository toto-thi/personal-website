<template>
  <a
    :href="href"
    class="font-medium text-slate-400 hover:text-green focus-visible:text-green"
    target="_blank"
    rel="noreferrer noopener"
    :aria-label="`${label} (opens in new tab)`"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string;
  label: string;
}>();
</script>
