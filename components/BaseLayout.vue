<template>
  <div class="min-h-screen w-full bg-navy text-slate-400">
    <div
      class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <slot />
    </div>
    <CursorMove class="absolute inset-0 z-0 hidden md:block" />
  </div>
</template>

<style>
html,
body {
  height: 100%;
  background-color: #0a192f;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
