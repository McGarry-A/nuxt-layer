<template>
    <component :is="getIcon()" />
</template>

<script setup lang="ts">
import BurgerMenu from "../Icons/BurgerMenu.vue";
import ClockIcon from "../Icons/ClockIcon.vue";
import CloseIcon from "../Icons/CloseIcon.vue";
import MouseIcon from "../Icons/MouseIcon.vue";
import PaymentsIcon from "../Icons/PaymentsIcon.vue"
import TherapyIcon from "../Icons/TherapyIcon.vue"

interface Props {
    type: keyof typeof icons;
}

const props = defineProps<Props>();

const icons = {
    "burger-menu": BurgerMenu,
    "close-icon": CloseIcon,
    "mouse-icon": MouseIcon,
    "clock-icon": ClockIcon,
    "payments-icon": PaymentsIcon,
    "therapy-icon": TherapyIcon
};

const getIcon = () => icons[props.type];
</script>


