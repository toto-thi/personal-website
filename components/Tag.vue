<template>
  <div
    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green"
  >
    {{ tech }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tech: string;
}>();
</script>
