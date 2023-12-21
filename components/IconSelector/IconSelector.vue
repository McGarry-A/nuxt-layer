<template>
  <component :is="getIcon()" />
</template>

<script setup lang="ts">
import BurgerMenu from "../Icons/BurgerMenu.vue";

interface Props {
  type: keyof typeof icons;
}

const props = defineProps<Props>();

const icons = {
  "burger-menu": BurgerMenu,
};

const getIcon = () => icons[props.type];
</script>


