<script setup lang="ts">
import { formatDateRange } from "~/utils/dateUtils";

interface Experience {
  date: string;
  url: string;
  range: { start: string; end: string };
}

const sortedExperiences = (list: Experience[]): Experience[] =>
  list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const experienceUrl = (item: Experience): string => item.url;
</script>

<template>
  <ContentSection
    sectionId="experiences"
    title="Experiences"
    path="/experiences"
    :dateDisplayFunction="(item) => formatDateRange(item.range)"
    :sortedItems="sortedExperiences"
    :itemUrl="experienceUrl"
    :extraLink="{
      url: '/resume.pdf',
      text: 'View Full Résumé',
      label: 'View Full Résumé (opens in new tab)',
      external: true,
    }"
  />
</template>
