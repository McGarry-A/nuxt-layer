<template>
    <div class="main">
        <hero-container />
        <section-wrapper class="flex flex-col gap-4 py-4 text-center">
            <h2 class="text-5xl font-bold font-primary text-clear">Why Gamechanger Urbanzoo?</h2>
            <div class="flex justify-between gap-10 p-20 mt-12 rounded-lg bg-surface-elevation-low">
                <div
                    class="flex-1 h-[300px] bg-surface-elevation-high rounded-lg flex flex-col justify-center items-center p-4 gap-3 shadow-sm">
                    <icon-selector
                        type="clock-icon"
                        class="h-1/2"
                    />
                    <h3 class="relative z-10 text-3xl leading-loose font-primary text-clear paint-stroke">Saves Time</h3>
                    <p class="leading-8 text-clear">
                        Some random loren impsum talking about something that is pretty long.
                    </p>
                </div>
                <div
                    class="flex-1 h-[300px] bg-surface-elevation-high rounded-lg flex flex-col justify-center items-center p-4 gap-3 shadow-sm">
                    <icon-selector
                        type="payments-icon"
                        class="h-1/2"
                    />
                    <h3 class="relative z-10 text-3xl leading-loose font-primary text-clear paint-stroke">Saves Money</h3>
                    <p class="leading-8 text-clear">
                        Some random loren impsum talking about something that is pretty long, and that you
                        dont want to listen to for sure.
                    </p>
                </div>
                <div
                    class="flex-1 h-[300px] bg-surface-elevation-high rounded-lg flex flex-col justify-center items-center p-4 gap-3 shadow-sm">
                    <icon-selector
                        type="therapy-icon"
                        class="h-1/2"
                    />
                    <h3 class="relative z-10 text-3xl leading-loose font-primary text-clear paint-stroke">Gives Peace of Mind</h3>
                    <p class="leading-8 text-clear">
                        Some random loren impsum talking about something that is pretty long, and that you
                        dont want to listen to for sure.
                    </p>
                </div>
            </div>
        </section-wrapper>
        <section-wrapper class="flex flex-col gap-4 py-4 text-center mt-section-margin">
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
                            <p class="text-clear">"Wow! Isn't this site awesome? Doesn't it want to make you pay me a big fat salary? No? Ok
                                then."</p>
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
