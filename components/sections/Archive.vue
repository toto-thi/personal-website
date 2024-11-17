<script setup lang="ts">
import { getOnlyYear } from '~/utils/dateUtils';
import type { ParsedContent } from '@nuxt/content';

function sortedProjects(list: ParsedContent[]): ParsedContent[] {
  return list.slice().sort((a, b) => {
    const dateA = new Date(a.date || '').getTime();
    const dateB = new Date(b.date || '').getTime();
    return dateB - dateA;
  });
};
</script>

<template>
  <div>
    <a
      href="/"
      class="group mb-2 inline-flex items-center font-semibold leading-tight text-green"
    >
      <Icon name="ArrowLeft" size="1em" /> Thinakone Louangdy
    </a>
    <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
      All Projects
    </h1>
    <table id="content" class="mt-12 w-full border-collapse text-left">
      <thead
        class="sticky top-0 z-10 border-b border-slate-300/10 bg-navy/75 px-6 py-5 backdrop-blur"
      >
        <tr>
          <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
          <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
          <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
            Made at
          </th>
          <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
            Built with
          </th>
          <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        <ContentList :path="'/projects'" v-slot="{ list }">
          <tr v-for="(project, index) in sortedProjects(list)"
          :key="index"
          class="border-b border-slate-300/10 last:border-none"
          >
          <td class="py-4 pr-4 align-top text-sm">
            <div class="translate-y-px">{{ getOnlyYear(project.date) }}</div>
          </td>
          <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
            <div>
              <div class="block sm:hidden">
                <a
                  :href="project.external || project.github || ''"
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green focus-visible:text-teal-300 sm:hidden group/link text-base"
                  target="_blank"
                  rel="norefferer noopenner"
                  :aria-label="`${project.title} (opens in a new tab)`"
                >
                  <span>
                    <span class="inline-block">{{ project.title }}<Icon name="External" /></span>
                  </span>
                </a>
              </div>
              <div class="hidden sm:block">{{ project.title }}</div>
            </div>
          </td>
          <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
            <div class="translate-y-px whitespace-nowrap">{{ project.company }}</div>
          </td>
          <td class="hidden py-4 pr-4 align-top lg:table-cell">
            <ul class="flex -translate-y-1.5 flex-wrap">
              <li
                v-for="(tech, techIndex) in project.tech"
                :key="techIndex"
                class="my-1 mr-1.5"
              >
                <Tag :tech="tech" />
              </li>
            </ul>
          </td>
          <td class="hidden py-4 align-top sm:table-cell">
            <ul class="translate-y-1">
              <li class="mb-1 flex items-center">
                <a
                  :href="project.github"
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green focus-visible:text-teal-300 text-sm group/link"
                  target="_blank"
                  rel="norefferer noopenner"
                  :aria-label="`${project.title} GitHub link (opens in a new tab)`"
                >
                  <span>
                    <span class="inline-block">
                      {{ project.title }}
                      <Icon name="External" size="1em" />
                      </span>
                  </span>
                </a>
              </li>
            </ul>
          </td>
        </tr>
        </ContentList>
      </tbody>
    </table>
  </div>
</template>
