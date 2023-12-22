<template>
  <div
    class="fixed w-screen h-screen bg-red-500"
  >
    <content-wrapper class="h-full">
      <div class="flex justify-end w-full py-4">
        <button
          class="text-white"
          @click="uiStore.toggleMenu()"
        >
          <icon-selector type="close-icon" />
        </button>
      </div>
      <nav-list class="flex-col h-full gap-8 text-white text-8xl" />
    </content-wrapper>
  </div>
</template>

<script setup lang="ts">
    const uiStore = useUiStore()
</script>
