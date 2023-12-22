export const useUiStore = defineStore('ui', () => {
    const menuIsOpen = ref(false);

    const toggleMenu = () => menuIsOpen.value = !menuIsOpen.value

    return { menuIsOpen, toggleMenu }
})
