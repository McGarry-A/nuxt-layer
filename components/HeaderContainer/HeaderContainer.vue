<template>
  <component :is="getHeaderType()" />
</template>
  
<script setup lang="ts">
import type { Component } from "vue";
import BaseHeader from "../BaseHeader/BaseHeader.vue";

const layoutStore = useLayoutStore();
const headerType: string = layoutStore.header.type

interface IHeaderMap {
    [key: string]: Component
}

const headerMap: IHeaderMap = {
  "base-header": BaseHeader,
};

const getHeaderType = () => headerMap[headerType];
</script>
