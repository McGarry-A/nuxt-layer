<template>
    <transition-wrapper
        key="Footer"
        :type="animation"
        :appear="true"
    >
        <component :is="getFooterType()" />
    </transition-wrapper>
</template>
  
<script setup lang="ts">
import type { Component } from "vue";
import BaseFooter from "@components/BaseFooter/BaseFooter.vue";

const layoutStore = useLayoutStore();
const { footer: { type, animation } } = layoutStore;

interface IfooterMap {
    [key: string]: Component
}

const footerMap: IfooterMap = {
    "base-footer": BaseFooter,
};

const getFooterType = () => footerMap[type];
</script>
