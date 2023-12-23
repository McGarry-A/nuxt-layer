<template>
    <template v-if="animation">
        <component
            :is="getAnimationType()"
            appear
        >
            <component :is="getHeroType()" />
        </component>
    </template>
    <template v-else>
        <component :is="getHeroType()" />
    </template>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import BaseHero from "../BaseHero/BaseHero.vue";
import AnimateFadeWrapper from "../AnimateFadeWrapper/AnimateFadeWrapper.vue"

const layoutStore = useLayoutStore();
const { hero: { type, animation } } = layoutStore;

interface IHeroMap {
    [key: string]: Component
}

const heroMap: IHeroMap = {
    "base-hero": BaseHero
}


const animationMap: IHeroMap = {
    "fade": AnimateFadeWrapper
}

const getHeroType = () => heroMap[type]
const getAnimationType = () => animationMap[animation]
</script>

