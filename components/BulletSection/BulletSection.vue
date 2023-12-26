<template>
    <section-wrapper>
        <div class="flex justify-between w-full gap-x-16">
            <div class="flex flex-col justify-start">
                <h3 class="text-4xl font-bold font-primary text-brand-strong">How Does it Work?</h3>
                <p class="text-lg text-subtle">Get your personalized color palette in 4 steps</p>
            </div>

            <div class="grid justify-between flex-1 grid-cols-2 grid-rows-2 gap-12">
                <div 
                    v-for="bullet in bullets" 
                    :key="bullet.number" 
                    class="flex items-start gap-4">
                    <h3 class="text-3xl font-bold text-brand">{{ bullet.number }}</h3>
                    <p class="flex-wrap text-lg">{{ bullet.description }}</p>
                </div>
            </div>
        </div>
    </section-wrapper>
</template>

<script setup lang="ts">
    const bullets = [
        {
            number: 1,
            description: "Start with two neutral colors for the text and the background"
        },
        {
            number: 2,
            description: "Choose your primary and secondary colors. Primary is for main CTAs and sections, and Secondary is for less important buttons and info cards."
        },
        {
            number: 3,
            description: "Accent color is an additional color. It appears in images, highlights, hyperlinks, boxes, cards, etc."
        },
        {
            number: 4,
            description: "Happy with the results? Press on “Export” and choose among different options to export in various formats, like .zip, .png, CSS, SCSS, QR Code, and more."
        },
    ]
</script>
