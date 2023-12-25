<template>
    <transition-wrapper
        :type="animation"
        :appear="true"
    >
        <component :is="getAboutSection()" />
    </transition-wrapper>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import BaseAbout from "../BaseAbout/BaseAbout.vue";

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

