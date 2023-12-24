<template>
    <div class="main">
        <hero-container />
        <benefits-section />

        <section-wrapper class="flex flex-col text-center">
            <h2 class="text-5xl font-bold font-primary text-clear">Testimonials</h2>
            <p class="pt-4 text-lg text-clear">Dont take my word for it! Hear people say imaginary things I just made up!</p>
            <div class="flex justify-center gap-10 p-20 mt-12 rounded-lg bg-surface-elevation-low">
                <splide
                    :options="options"
                    class="w-full cursor-grab"
                >
                    <splide-slide
                        v-for="item in 10"
                        :key="item"
                    >
                        <div
                            class="flex-1 h-[300px] bg-surface-elevation-high rounded-lg flex flex-col justify-start items-start p-8 gap-6 shadow-sm w-full">
                            <div class="flex items-center gap-4">
                                <div class="relative w-20 h-20 overflow-hidden rounded-full bg-surface-elevation-low">
                                    <icon-selector
                                        type="person-icon"
                                        class="absolute w-24 h-24 -right-2"
                                    />
                                </div>
                                <div class="flex flex-col justify-start">
                                    <h4 class="text-lg text-left text-clear">Mega User</h4>
                                    <p class="text-subtle">Frontend Developer</p>
                                </div>
                            </div>
                            <icon-selector type="star-icon" />
                            <p class="text-clear text-start">Isn't this site awesome? Doesn't it want to make you pay me a big fat salary? No?
                                Ok
                                then."
                            </p>
                        </div>
                    </splide-slide>
                </splide>
            </div>
        </section-wrapper>
    </div>
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
