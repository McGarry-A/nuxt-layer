<template>
    <component :is="getAnimation()">
        <content-wrapper class="bg-surface">
            <slot />
        </content-wrapper>
    </component>
</template>

<script setup lang="ts">
import AnimateFadeWrapper from '../AnimateFadeWrapper/AnimateFadeWrapper.vue';
import AnimateSlideWrapper from '../AnimateSlideWrapper/AnimateSlideWrapper.vue';

const animationMap = {
    "fade": AnimateFadeWrapper,
    "slide": AnimateSlideWrapper
}

const getAnimation = () => animationMap["slide"]
</script>
