<template>
    <div class="flex-1 h-[300px] bg-surface-elevation-high rounded-lg flex flex-col justify-start items-start p-8 gap-6 shadow-sm w-full">
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
</template>
