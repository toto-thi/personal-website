<template>
  <BaseLayout>
    <div class="lg:flex lg:justify-between lg:gap-4 min-h-screen">
      <Nav />
      <main id="main-content" class="pt-24 lg:w-1/2 lg:py-24 min-h-screen">
        <NuxtPage />
      </main>
      <SpeedInsights />
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>