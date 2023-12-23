<template>
    <template v-if="animation">
        <component
            :is="getHeaderAnimation()"
            appear
        >
            <component :is="getHeaderType()" />
        </component>
    </template>
    <template v-else>
        <component
            :is="getHeaderType()"
            class="else"
        />
    </template>
</template>
  
<script setup lang="ts">
import type { Component } from "vue";
import BaseHeader from "../BaseHeader/BaseHeader.vue";
import AnimateFadeWrapper from "../AnimateFadeWrapper/AnimateFadeWrapper.vue";

const layoutStore = useLayoutStore();
const { header: { type, animation } } = layoutStore;

interface IHeaderMap {
    [key: string]: Component
}

const headerMap: IHeaderMap = {
    "base-header": BaseHeader,
};

const animationMap: IHeaderMap = {
    "fade": AnimateFadeWrapper
}

const getHeaderType = () => headerMap[type];
const getHeaderAnimation = () => animationMap[animation];
</script>
