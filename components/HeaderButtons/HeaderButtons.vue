<template>
  <button
    class="button"
    @click="uiStore.toggleMenu()"
  >
    <icon-selector
      type="burger-menu"
      class="hidden text-brand-strong lg:block"
    />
  </button>
</template>

<script lang="ts" setup>
    const uiStore = useUiStore()
</script>
