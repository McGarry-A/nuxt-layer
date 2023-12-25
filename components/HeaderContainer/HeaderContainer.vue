<template>
    <component :is="getHeaderType()" />
</template>
  
<script setup lang="ts">
import type { Component } from "vue";
import BaseHeader from "@components/BaseHeader/BaseHeader.vue";

const layoutStore = useLayoutStore();
const { header: { type } } = layoutStore;

interface IHeaderMap {
    [key: string]: Component
}

const headerMap: IHeaderMap = {
    "base-header": BaseHeader,
};

const getHeaderType = () => headerMap[type];
</script>
