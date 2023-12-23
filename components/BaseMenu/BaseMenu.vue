<template>
    <div class="fixed w-screen h-screen bg-surface-bg">
        <content-wrapper class="h-full">
            <div class="flex justify-end w-full py-2">
                <button
                    class="text-clear"
                    @click="uiStore.toggleMenu()"
                >
                    <icon-selector type="close-icon" />
                </button>
            </div>
            <nav-list class="flex-col h-full gap-8 text-clear text-8xl" />
        </content-wrapper>
    </div>
</template>

<script setup lang="ts">
const uiStore = useUiStore()
</script>
