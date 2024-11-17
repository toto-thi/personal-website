<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const router = useRouter();
const customConfig = useCustomConfig();
const navLinks = computed(() => customConfig.navLinks);
const socialMedia = computed(() => customConfig.socialMedia);
const { dailyQuote } = useDailyQuote();

const activeSection = ref("");
const sections = computed(() => navLinks.value.map((link) => link.url.replace("#", "")));

const handleNavClick = (url: string) => {
  const sectionId = url.startsWith("#") ? url : `#${url}`;
  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    activeSection.value = sectionId.slice(1);
  } else {
    console.warn(`Section not found: ${sectionId}`);
  }
};

let observer: IntersectionObserver | null = null;
const initObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        const mostVisibleEntry = visibleEntries.reduce((highest, entry) =>
          entry.intersectionRatio > highest.intersectionRatio ? entry : highest
        );
        activeSection.value = mostVisibleEntry.target.id;
      }
    },
    { threshold: [0.1, 0.5, 0.9] }
  );

  sections.value.forEach((id) => {
    const section = document.getElementById(id);
    if (section && observer) observer.observe(section);
  });
};

onMounted(async () => {
  router.replace("/");
  activeSection.value = sections.value[0];
  initObserver();
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <header
    class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
  >
    <div>
      <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">Thinakone Louangdy</a>
      </h1>
      <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-400 sm:text-x">
        Young Explorer at
        <!-- -->
        <NuxtLink
          to="https://explorers.nationalgeographic.org/directory/thinakone-louangdy"
          class="inline-flex items-center font-medium leading-tight text-slate-200 group"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Young Explorer Page (opens in new tab)"
        >
          <span
            class="border-b border-transparent pb-px transition group-hover:border-green motion-reduce:transition-none"
            >National Geographic Society</span>
        </NuxtLink>
      </h2>
      <TypingText :text="dailyQuote" :speed="100" />
      <nav id="navigation" class="nav hidden lg:block" aria-label="In-page jump links">
        <ul class="mt-16 w-max">
          <li v-for="link in navLinks" :key="link.url">
            <a
              :href="link.url"
              :class="[
                'group flex items-center py-3 transition-colors duration-300',
                activeSection === link.url.slice(1)
                  ? 'text-slate-200 font-bold'
                  : 'text-slate-500',
              ]"
              @click="handleNavClick(link.url)"
            >
              <span
                :class="[
                  'nav-indicator mr-4 h-px transition-all duration-300',
                  activeSection === link.url.slice(1)
                    ? 'w-16 bg-slate-200'
                    : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200',
                ]"
              ></span>
              <span
                :class="[
                  'nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300',
                  activeSection === link.url.slice(1)
                    ? 'text-slate-200'
                    : 'text-slate-500 group-hover:text-slate-200',
                ]"
              >
                {{ link.name }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li class="mr-5 text-xs shrink-0" v-for="social in socialMedia" :key="social.url">
        <a
          :href="social.url"
          class="block hover:text-slate-200"
          target="_blank"
          rel="norefferrer noopenner"
          :aria-label="`${social.name} (opens in a new tab)`"
          :title="social.name"
        >
          <span class="sr-only">{{ social.name }}</span>
          <Icon :name="social.name" size="2em" />
        </a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
