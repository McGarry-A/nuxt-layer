export const useLayoutStore = defineStore('layout', () => {
    const header = ref({
        type: "base-header",
        position: ""
    });
    const menu = ref({ type: "base-menu", animation: "slide" });

    return { header, menu }
})
