<script setup lang="ts">
import { computed } from 'vue';
import IconAppStore from './icons/IconAppStore.vue';
import IconBookmark from './icons/IconBookmark.vue';
import IconExternal from './icons/IconExternal.vue';
import IconFolder from './icons/IconFolder.vue';
import IconFork from './icons/IconFork.vue';
import IconGitHub from './icons/IconGitHub.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';
import IconStar from './icons/IconStar.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconArrowLeft from './icons/IconArrowLeft.vue';

const props = defineProps<{
  name: string;
  size?: string;
}>();

const size = props.size || '1em';

const icons: Record<string, any> = {
  AppStore: IconAppStore,
  Bookmark: IconBookmark,
  External: IconExternal,
  Folder: IconFolder,
  Fork: IconFork,
  GitHub: IconGitHub,
  Instagram: IconInstagram,
  LinkedIn: IconLinkedIn,
  Star: IconStar,
  Twitter: IconTwitter,
  ArrowRight: IconArrowRight,
  ArrowLeft: IconArrowLeft,
  Facebook: IconFacebook,
};

const iconComponent = computed(() => icons[props.name as keyof typeof icons] || null);
</script>

<template>
  <component :is="iconComponent" v-if="iconComponent"
  :style="{ width: size, height: size }" />
</template>
