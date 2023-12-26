<template>
    <section-wrapper class="flex flex-col text-center">
        <template #title>Shop Now!</template>
        <template #description>Check out or store of products!</template>
        <splide
            :options="options"
            class="w-full cursor-grab"
        >
            <splide-slide
                v-for="item in 10"
                :key="item"
            >
                <card-product />
            </splide-slide>
        </splide>
    </section-wrapper>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';


const options = {
    type: 'loop',
    padding: '5rem',
    arrows: false,
    pagination: false,
    perPage: 4,
    gap: '2rem',
    autoplay: true,
}
</script>
