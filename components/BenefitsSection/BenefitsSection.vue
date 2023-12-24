<template>
    <section-wrapper class="flex flex-col gap-4 py-4 ">
        <h2 class="text-5xl font-bold text-center font-primary text-clear">Why Gamechanger Urbanzoo?</h2>
        <div class="flex justify-between gap-10 p-20 mt-12 rounded-lg bg-surface-elevation-low">
            <card-benefits
                v-for="(item, index) in benefits"
                :key="index"
                :icon="item.icon"
                :title="item.title"
                :description="item.description"
            />
        </div>
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
