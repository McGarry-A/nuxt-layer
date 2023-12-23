<template>
    <div class="border-b border-subtle font-primary">
        <content-wrapper class="flex items-center gap-8">
            <div
                class="flex items-center gap-2"
                :class="{ 'flex-1': variant !== 'start' }"
            >
                <brand-logo />
                <h4
                    v-if="options.showBrandName"
                    class="text-lg font-bold text-brand-strong"
                >
                    Urbanzoo
                </h4>
            </div>
            <nav-list
                :class="{ 'justify-end': variant === 'end', 'justify-center flex-1': variant === 'center', 'justify-start': variant === 'start' }"
            />
            <header-buttons :class="{ 'flex-1 flex justify-end': variant === 'center' }" />
        </content-wrapper>
    </div>
</template>

<script setup lang="ts">
const { header: { variant, options } } = useLayoutStore();
</script>
