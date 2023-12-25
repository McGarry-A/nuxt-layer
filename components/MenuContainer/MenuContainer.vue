<template>
    <transition-wrapper
        key="Menu"
        :type="animation"
    >
        <component
            :is="getMenu()"
            v-if="uiStore.menuIsOpen"
        />
    </transition-wrapper>
</template>

<script
      setup
      lang="ts"
    >
    import type { Component } from "vue";
    import BaseMenu from "@components/BaseMenu/BaseMenu.vue";

    const layoutStore = useLayoutStore();
    const uiStore = useUiStore()

    const { menu: { type, animation } } = layoutStore

    interface IHeaderMap {
        [key: string]: Component
    }

    const menuMap: IHeaderMap = {
        "base-menu": BaseMenu,
    };

    const getMenu = () => menuMap[type]
    </script>
