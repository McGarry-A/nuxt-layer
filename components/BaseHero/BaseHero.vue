<template>
    <content-wrapper
        class="flex justify-center flex-1 h-full min-h-[70vh]"
        :class="{ 'flex-row-reverse': variant === 'end' }"
    >
        <div
            class="flex flex-col justify-center flex-1 gap-10"
            :class="{ 'items-center max-w-6xl text-center': variant === 'center', 'items-center': variant === 'end' }"
        >
            <div
                class="px-4 py-2 text-xs border-brand-subtle bg-gradient-to-r from-secondary-subtle to-secondary rounded-2xl w-max text-inverse-clear font-secondary">
                <p>☃️ A Training Ground for Composition 🎄</p>
            </div>
            <h1
                class="font-bold text-8xl font-primary text-brand"
                :class="{ 'text-center': variant === 'end' }"
            >
                Visualize Your
                <span
                    class="pr-3 italic tracking-tighter text-transparent bg-gradient-to-r from-secondary-subtle to-secondary bg-clip-text">Colors</span>
                &
                <span class="text-transparent font-tertiary bg-gradient-to-r from-brand-subtle to-brand bg-clip-text">Fonts</span>
                on a Real Site
            </h1>
            <div class="flex flex-col gap-2 text-clear">
                <p>Choosing colors or typography for your website?</p>
                <p>Use the tailwind colors to choose something.</p>
            </div>
            <div class="flex gap-4 text-lg">
                <button class="btn-primary">Get Started</button>
                <button class="btn-ghost">How Does It Work</button>
            </div>
            <div class="flex items-center gap-2 text-xs text-clear">
                <icon-selector type="mouse-icon" />
                <p>Continue scrolling to see more</p>
            </div>
        </div>
        <div
            v-if="variant !== 'center'"
            class="flex items-center flex-1"
            :class="{ 'justify-end': variant === 'start', 'justify-start': variant === 'start' }"
        >
            <hero-img />
        </div>
    </content-wrapper>
</template>

<script lang="ts" setup>
const layout = useLayoutStore();
const { hero: { variant } } = layout
</script>
