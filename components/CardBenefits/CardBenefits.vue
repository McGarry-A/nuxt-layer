<template>
    <card-wrapper class="items-center justify-center h-[300px] gap-4 text-center">
        <icon-selector
            :type="props.icon"
            class="h-1/2"
        />
        <h3 class="relative z-10 text-3xl leading-loose font-primary text-clear paint-stroke">{{ props.title }}</h3>
        <p class="leading-8 text-clear">
            {{ props.description }}
        </p>
    </card-wrapper>
</template>

<script lang="ts" setup>
interface IBenefit {
    icon: string,
    title: string,
    description: string,
}
const props = defineProps<IBenefit>()
</script>
