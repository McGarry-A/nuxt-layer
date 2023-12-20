<template>
  <component :is="getHeaderType()" />
</template>
  
<script setup lang="ts">
    import BaseHeader from "../BaseHeader/BaseHeader.vue"
    import type { Component } from "vue"

    type Props = {
        type: "BaseHeader"
    }

    interface MapInterface {
        [key: string]: Component
    }

    const props = defineProps<Props>()
    const map: MapInterface = {
         BaseHeader: BaseHeader
    }

    const getHeaderType = () => map[props.type]
</script>
