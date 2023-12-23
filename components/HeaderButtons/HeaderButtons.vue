<template>
  <button
    class="button"
    @click="uiStore.toggleMenu()"
  >
    <icon-selector
      type="burger-menu"
      class="text-brand-strong"
    />
  </button>
</template>

<script lang="ts" setup>
    const uiStore = useUiStore()
</script>
