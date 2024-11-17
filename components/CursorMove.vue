<template>
  <div
    ref="glowEffect"
    class="fixed top-0 left-0 w-screen h-screen pointer-events-none transition-transform duration-100"
    :style="{
      background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const position = ref({ x: 0, y: 0 });

function handleMouseMove(e) {
  position.value = {
    x: e.clientX,
    y: e.clientY,
  };
}

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

