<template>
  <component :is="getHeaderType()" />
</template>
  
<script setup lang="ts">
import BaseHeader from "../BaseHeader/BaseHeader.vue";

interface Props {
  type: keyof typeof headerMap;
}

const props = defineProps<Props>();

const headerMap = {
  "base-header": BaseHeader,
};

const getHeaderType = () => headerMap[props.type];
</script>
