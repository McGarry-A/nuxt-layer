<template>
    <transition-wrapper
        key="Header"
        :type="animation"
        :appear="true"
    >
        <component :is="getHeaderType()" />
    </transition-wrapper>
</template>
  
<script setup lang="ts">
import type { Component } from "vue";
import BaseHeader from "../BaseHeader/BaseHeader.vue";

const layoutStore = useLayoutStore();
const { header: { type, animation } } = layoutStore;

interface IHeaderMap {
    [key: string]: Component
}

const headerMap: IHeaderMap = {
    "base-header": BaseHeader,
};

const getHeaderType = () => headerMap[type];
</script>
