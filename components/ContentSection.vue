<template>
  <section
    :id="sectionId"
    :aria-label="title"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {{ title }}
      </h2>
    </div>

    <div>
      <ol class="group/list">
        <ContentList :path="path" v-slot="{ list }">
          <li v-for="item in sortedItems(list)" :key="item._path" class="mb-12">
            <div
              class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
              ></div>
              <header
                class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              >
                {{ dateDisplayFunction(item) }}
              </header>
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green focus-visible:text-green group/link text-base"
                      :href="itemUrl(item)"
                    >
                      <span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                      ></span>
                      <span>
                        {{ item.title }} ·
                        <span class="inline-block">
                          {{ item.company }} <Icon name="External" />
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p class="mt-2 text-sm leading-normal">
                  {{ extractTextFromBody(item.body) }}
                </p>
                <ul class="mt-2 flex flex-wrap">
                  <li class="mr-1.5 mt-2" v-for="tech in item.tech" :key="tech">
                    <Tag :tech="tech" />
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ContentList>
      </ol>

      <div v-if="extraLink" class="mt-12">
        <a
          v-if="extraLink.external"
          :href="extraLink.url"
          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green focus-visible:text-green group/link text-base"
          target="_blank"
          rel="noreferer noopener"
          :aria-label="extraLink.label"
        >
          <span>{{ extraLink.text }} <Icon name="External" /> </span>
        </a>
        <NuxtLink
          v-else
          :to="extraLink.url"
          class="inline-flex items-center font-medium leading-tight text-slate-200 group"
          :aria-label="extraLink.label"
        >
          <span
            class="border-b border-transparent pb-px transition group-hover:border-green motion-reduce:transition-none"
          >
            {{ extraLink.text }} <Icon name="ArrowRight" size="1em" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { extractTextFromBody } from "~/utils/markdownUtils";

const props = defineProps({
  sectionId: String,
  title: String,
  path: String,
  dateDisplayFunction: {
    type: Function as PropType<(item: any) => string>,
    default: () => (item: any) => '',
  },
  sortedItems: {
    type: Function as PropType<(list: any[]) => any[]>,
    default: () => (list: any[]) => list,
  },
  itemUrl: {
    type: Function as PropType<(item: any) => string>,
    default: () => (item: any) => '',
  },
  extraLink: {
    type: Object as PropType<{
      url: string;
      text: string;
      label: string;
      external?: boolean;
    }>,
    default: null,
  },
});
</script>
