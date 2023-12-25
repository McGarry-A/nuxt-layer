<template>
    <component :is="getIcon()" />
</template>

<script setup lang="ts">
import BurgerMenu from "@components/Icons/BurgerMenu.vue";
import ClockIcon from "@components/Icons/ClockIcon.vue";
import CloseIcon from "@components/Icons/CloseIcon.vue";
import MouseIcon from "@components/Icons/MouseIcon.vue";
import PaymentsIcon from "@components/Icons/PaymentsIcon.vue"
import PersonIcon from "@components/Icons/PersonIcon.vue";
import TherapyIcon from "@components/Icons/TherapyIcon.vue"
import StarIcon from "@components/Icons/StarIcon.vue"
import TickIcon from "@components/Icons/TickIcon.vue";

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
    "therapy-icon": TherapyIcon,
    "person-icon": PersonIcon,
    "star-icon": StarIcon,
    "tick-icon": TickIcon
};

const getIcon = () => icons[props.type];
</script>


