<template>
    <component :is="getFooterType()" />
</template>
  
<script setup lang="ts">
import type { Component } from "vue";
import BaseFooter from "@components/BaseFooter/BaseFooter.vue";

const layoutStore = useLayoutStore();
const { footer: { type } } = layoutStore;

interface IfooterMap {
    [key: string]: Component
}

const footerMap: IfooterMap = {
    "base-footer": BaseFooter,
};

const getFooterType = () => footerMap[type];
</script>
