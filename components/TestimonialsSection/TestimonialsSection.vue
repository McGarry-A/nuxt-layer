<template>
    <section-wrapper class="flex flex-col text-center">
        <template #title>Testimonials</template>
        <template #description>Dont take my word for it! Hear people say imaginary things I just made up!</template>
        <splide
            :options="options"
            class="w-full cursor-grab"
        >
            <splide-slide
                v-for="item in 10"
                :key="item"
            >
                <card-testimonial />
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
    perPage: 3,
    gap: '2rem',
    autoplay: true,
}
</script>
