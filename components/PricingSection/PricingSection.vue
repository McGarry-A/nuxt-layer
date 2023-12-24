<template>
    <section-wrapper class="flex flex-col text-center">
        <template #title>Plans & Pricing</template>
        <template #description>Since everything is free, we know we wont be beaten on price!</template>
        <div class="grid w-full grid-cols-10 gap-10">
            <card-pricing
                v-for="(item, idx) in pricing"
                :key="idx"
                :class="[item.highlight ? 'col-span-4' : 'col-span-3 my-4']"
                :title="item.title"
                :price="item.price"
                :benefits="item.benefits"
                :cta="item.cta"
                :highlight="item.highlight"
            />
        </div>
    </section-wrapper>
</template>

<script setup lang="ts">
const pricing = [
    {
        title: "Basic",
        price: "0",
        benefits: ["Some benefit to start", "Another one to follow"],
        cta: "Get Started"
    },
    {
        title: "Advanced",
        price: "0",
        benefits: ["Some benefit to start", "Another one to follow", "The one you dont pay for", "Some benefit to start", "Another one to follow", "The one you dont pay for"],
        cta: "Get Started",
        highlight: true
    },
    {
        title: "Pro",
        price: "0",
        benefits: ["Some benefit to start", "Another one to follow", "The one you dont pay for", "Some benefit to start", "Another one to follow", "The one you dont pay for"],
        cta: "Speak to A Rep"
    },

]
</script>
