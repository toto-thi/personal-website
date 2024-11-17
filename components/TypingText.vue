<template>
  <p ref="typingElement" class=" mt-4 max-w-xs leading-normal">
    <!-- Typed text will display here -->
    <span>{{ displayedText }}</span>
    <!-- Blinking cursor that disappears after typing is complete -->
    <span v-if="showCursor" class="ml-1 w-[2px] h-[1em] bg-current animate-blink inline-block"></span>
  </p>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps<{
  text: string;
  speed?: number;
}>();

const displayedText = ref("");
const showCursor = ref(true);

function typeText(text: string, speed: number) {
  let index = 0;
  const type = () => {
    if (index < text.length) {
      displayedText.value += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => (showCursor.value = false), 500);
    }
  };
  type();
}

onMounted(() => {
  typeText(props.text, props.speed || 50);
});
</script>
