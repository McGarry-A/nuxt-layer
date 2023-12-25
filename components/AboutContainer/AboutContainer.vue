<template>
    <component :is="getAboutSection()" />
</template>

<script setup lang="ts">
import type { Component } from "vue";
import BaseAbout from "@components/BaseAbout/BaseAbout.vue";

const layoutStore = useLayoutStore();
const { about: { type, animation } } = layoutStore;

interface IAboutMap {
    [key: string]: Component
}

const aboutMap: IAboutMap = {
    "base-about": BaseAbout,
};

const getAboutSection = () => aboutMap[type]
</script>

