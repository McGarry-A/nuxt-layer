<template>
    <component :is="getIcon()" />
</template>

<script setup lang="ts">
import BurgerMenu from "../Icons/BurgerMenu.vue";
import CloseIcon from "../Icons/CloseIcon.vue";
import MouseIcon from "../Icons/MouseIcon.vue";

interface Props {
    type: keyof typeof icons;
}

const props = defineProps<Props>();

const icons = {
    "burger-menu": BurgerMenu,
    "close-icon": CloseIcon,
    "mouse-icon": MouseIcon
};

const getIcon = () => icons[props.type];
</script>


