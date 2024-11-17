<template>
  <BaseLayout>
    <main class="lg:py-24">
      <NuxtPage />
      <SpeedInsights />
    </main>
  </BaseLayout>
</template>
<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>