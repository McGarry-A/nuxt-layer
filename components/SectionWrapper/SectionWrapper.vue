<template>
    <content-wrapper class="bg-surface mt-section-margin">
        <h2 class="text-5xl font-bold text-center font-primary text-clear">
            <slot
                v-if="slots.title"
                name="title"
            />
        </h2>
        <p class="pt-4 text-lg text-center text-clear">
            <slot
                v-if="slots.description"
                name="description"
            />
        </p>
        <div class="flex justify-between gap-10 p-20 mt-12 rounded-lg bg-surface-elevation-low">
            <slot />
        </div>
    </content-wrapper>
</template>

<script setup lang="ts">
const slots = useSlots()
</script>
