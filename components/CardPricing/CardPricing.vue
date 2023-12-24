<template>
    <card-wrapper class="text-center bg-surface-elevation-high">
        <p
            v-if="props.highlight"
            class="text-xs"
        >
            Most Popular🔥
        </p>
        <h4 class="text-4xl font-bold">{{ props.title }}</h4>
        <p>£{{ props.price }} / month</p>
        <ul class="flex flex-col gap-4 mb-4">
            <li
                v-for="(item, key) in props.benefits"
                :key="key"
                class="flex gap-4 w-[220px] mx-auto text-start"
            >
                <icon-selector
                    type="tick-icon"
                    class="float-left text-brand"
                /> {{ item }}
            </li>
        </ul>
        <button class="mx-auto mt-auto btn btn-primary w-max">{{ props.cta }}</button>
    </card-wrapper>
</template>

<script setup lang="ts">
interface IProps {
    title: string,
    price: string,
    benefits: string[]
    cta: string
    highlight?: boolean,
}

const props = defineProps<IProps>()
</script>
