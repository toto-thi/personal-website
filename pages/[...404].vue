<template>
  <div class="error-page">
    <h1>404 | This page could not be found</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

useHead({
  title: "404 | Not Found",
});
</script>

<style scoped>
.error-page {
  text-align: center;
  font-size: 1rem;
  padding: 1rem;
}
</style>
