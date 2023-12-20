<template>
  <component :is="getIcon()" />
</template>

<script setup lang="ts">
    import BurgerMenu from '../Icons/BurgerMenu.vue';
    import type { Component } from "vue"

    interface Props {
        type: keyof typeof icons
    }

    const props = defineProps<Props>()

    interface iconsInterface {
        [key: string]: Component
    }

    const icons: iconsInterface = { BurgerMenu }
    const getIcon = () => icons[props.type]
</script>


