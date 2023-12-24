<template>
    <component :is="getAnimation()">
        <content-wrapper class="bg-surface mt-section-margin">
            <h2 class="text-5xl font-bold text-center font-primary text-clear">
                <slot name="title" />
            </h2>
            <p class="pt-4 text-lg text-center text-clear">
                <slot name="description" />
            </p>
            <div class="flex justify-between gap-10 p-20 mt-12 rounded-lg bg-surface-elevation-low">
                <slot />
            </div>
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
