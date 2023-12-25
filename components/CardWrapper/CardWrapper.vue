<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts" setup>
const attrs = useAttrs()
const classes = computed(() => {
    return twMerge('flex flex-col flex-1 w-full gap-6 p-8 rounded-lg shadow-sm bg-surface-elevation-high', attrs.class)
})
</script>
