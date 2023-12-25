<template>
    <Transition
        :name="props.type"
        :appear="props.appear"
    >
        <slot />
    </Transition>
</template>

<script setup lang="ts">
import type { TAnimate } from '~/stores/useLayoutStore';

const props = defineProps<{
    type: TAnimate,
    appear?: boolean
}>()
</script>
  
<style>
.fade-enter-active {
    transition: all 0.6s ease;
}

.fade-enter-from {
    transform: translateY(20px);
    opacity: 0;
}

.slide-enter-active {
    transition: all 0.3s ease-out;
}

.slide-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
