<template>
    <component :is="getHeroType()" />
</template>

<script setup lang="ts">
import type { Component } from "vue";
import BaseHero from "@components/BaseHero/BaseHero.vue";

const layoutStore = useLayoutStore();
const { hero: { type } } = layoutStore;

interface IHeroMap {
    [key: string]: Component
}

const heroMap: IHeroMap = {
    "base-hero": BaseHero
}

const getHeroType = () => heroMap[type]
</script>

