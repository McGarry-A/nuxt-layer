<template>
  <nuxt-link :to="to">
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  to: string;
}
defineProps<Props>();
</script>
