<template>
    <section-wrapper class="flex flex-col gap-4 py-4 ">
        <template #title>Why Gamechanger Urbanzoo?</template>
        <card-benefits
            v-for="(item, index) in benefits"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
        />
    </section-wrapper>
</template>

<script setup lang="ts">
const benefits = [{
    icon: "clock-icon",
    title: "Saves Time",
    description: "Some random loren impsum talking about something that is pretty long."
}, {
    icon: "payments-icon",
    title: "Saves Money",
    description: "Some random loren impsum talking about something that is pretty long, and that you dont want to listen to for sure."
}, {
    title: "Gives Peace of Mind",
    icon: "therapy-icon",
    description: "Some random loren impsum talking about something that is pretty long, and that you dont want to listen to for sure."
}
]
</script>
