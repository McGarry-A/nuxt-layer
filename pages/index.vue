<template>
    <div class="main">
        <hero-container />
        <section-wrapper class="flex flex-col gap-4 py-4 text-center">
            <h2 class="text-5xl font-bold font-primary text-brand">Why Gamechanger Urbanzoo?</h2>
            <div class="flex justify-between gap-4 pt-12">
                <div class="flex-1 h-[300px] bg-surface-elevation-low rounded flex flex-col justify-center items-center px-4 gap-3 shadow-sm">
                    <icon-selector type="clock-icon" />
                    <h3 class="text-3xl font-primary text-brand">Saves Time</h3>
                    <p>Some random loren impsum talking about something that is pretty long, and that you
                        dont want to listen to for sure. How about that? Why are you still reading.
                    </p>
                </div>
                <div class="flex-1 h-[300px] bg-surface-elevation-low rounded flex flex-col justify-center items-center px-4 gap-3 shadow-sm">
                    <icon-selector type="payments-icon" />
                    <h3 class="text-3xl font-primary text-brand">Saves Money</h3>
                    <p>Some random loren impsum talking about something that is pretty long, and that you
                        dont want to listen to for sure. How about that? Why are you still reading. Adding some more text for this to be the
                        longest.
                    </p>
                </div>
                <div class="flex-1 h-[300px] bg-surface-elevation-low rounded flex flex-col justify-center items-center px-4 gap-3 shadow-sm">
                    <icon-selector type="therapy-icon" />
                    <h3 class="text-3xl font-primary text-brand">Gives Peace of Mind</h3>
                    <p>Some random loren impsum talking about something that is pretty long, and that you
                        dont want to listen to for sure. How about that?
                    </p>
                </div>
            </div>
        </section-wrapper>
    </div>
</template>

<script setup lang="ts"></script>
