<template>
    <Transition name="fade">
        <slot />
    </Transition>
</template>
  
<style>
.fade-enter-active {
    transition: all 0.6s ease;
}

.fade-enter-from {
    transform: translateY(20px);
    opacity: 0;
}
</style>
  