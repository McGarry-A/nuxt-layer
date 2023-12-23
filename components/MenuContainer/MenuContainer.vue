<template>
  <component
    :is="getAnimation()"
    class="animation"
  >
    <component
      :is="getMenu()"
      v-if="uiStore.menuIsOpen"
    />
  </component>
</template>

    <script
      setup
      lang="ts"
    >
      import type { Component } from "vue";
      import BaseMenu from "../BaseMenu/BaseMenu.vue";
      import AnimateSlideWrapper from "../AnimateSlideWrapper/AnimateSlideWrapper.vue"

      const layoutStore = useLayoutStore();
      const uiStore = useUiStore()
      
      const { menu: { type: menuType, animation: animationType }} = layoutStore

      interface IHeaderMap {
      [key: string]: Component
      }

      const menuMap: IHeaderMap = {
      "base-menu": BaseMenu,
      };

      const animationMap: IHeaderMap = {
      "slide": AnimateSlideWrapper
      }

      const getMenu = () => menuMap[menuType]
      const getAnimation = () => animationMap[animationType]
    </script>
