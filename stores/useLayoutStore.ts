export const useLayoutStore = defineStore('layout', () => {
    const header = ref<IHeader>({
        type: "base-header",
        position: "",
        variant: "end",
        options: {
            showBrandName: true,
        }
    });

    const menu = ref<IMenu>({
        type: "base-menu",
        animation: "slide"
    });

    const hero = ref({
        type: "base-hero"
    })

    return { header, menu, hero }
})


interface IHeader {
    type: HeaderType,
    position: HeaderPosition
    variant: HeaderVariant
    options: HeaderOptions
}

interface IMenu {
    type: MenuType,
    animation: MenuAnimation
}

type MenuType = "base-menu"
type MenuAnimation = "slide"

type HeaderType = "base-header"
type HeaderPosition = "" | "fixed" | "sticky"
type HeaderVariant = "start" | "center" | "end"
type HeaderOptions = {
    showBrandName: boolean
}
