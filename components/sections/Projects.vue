<script setup lang="ts">
import { formatDate } from '~/utils/dateUtils';

interface Project {
  showInProjects: boolean;
  date: string;
  github?: string;
  external?: string;
};

const sortedProjects = (list: Project[]) =>
  list
    .filter((item) => item.showInProjects)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const projectUrl = (item: Project): string => item.github || item.external || '';
</script>

<template>
  <ContentSection
    sectionId="projects"
    title="Projects"
    path="/projects"
    :dateDisplayFunction="(item) => formatDate(item.date)"
    :sortedItems="sortedProjects"
    :itemUrl="projectUrl"
    :extraLink="{ 
      url: '/archive', 
      text: 'View Full Project Archive', 
      label: 'View Full Project Archive' 
      }"
  />
</template>
