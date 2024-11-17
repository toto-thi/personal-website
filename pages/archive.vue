<script setup lang="ts">
definePageMeta({
  layout: "archive",
});

useHead({
  title: "Archive | Thinakone Louangdy",
  meta: [
    {
      name: "description",
      content: "Browse the archive of projects on Thinakone’s portfolio.",
    },
    { property: "og:title", content: "Archive | Thinakone Louangdy" },
    {
      property: "og:description",
      content: "Browse the archive of projects on Thinakone Louangdy.",
    },
    { property: "og:image", content: "/favicon.ico.png" },
    { property: "og:url", content: "https://thinakone.com/archive" },
  ],
});
</script>

<template>
  <SectionsArchive />
</template>
