export const useLayoutStore = defineStore('layout', () => {
    const header = ref<IHeader>({
        type: "base-header",
        position: "",
        variant: "end",
        animation: undefined,
        options: {
            showBrandName: true,
        }
    });

    const menu = ref<IMenu>({
        type: "base-menu",
        animation: undefined,
    });

    const hero = ref<IHero>({
        type: "base-hero",
        animation: "fade",
        variant: "start",
        options: {},
    })

    return { header, menu, hero }
})


interface IHeader {
    type: HeaderType,
    position: HeaderPosition
    animation: HeaderAnimation
    variant: HeaderVariant
    options: HeaderOptions
}

interface IMenu {
    type: MenuType,
    animation: MenuAnimation
}

interface IHero {
    type: HeroType,
    variant: HeroVariants,
    options: HeroOptions,
    animation: HeroAnimation,
}

type MenuType = "base-menu"
type HeaderType = "base-header"
type HeroType = "base-hero"

type MenuAnimation = "slide" | undefined
type HeroAnimation = "fade" | undefined
type HeaderAnimation = "fade" | undefined

type HeaderPosition = "" | "fixed" | "sticky"

type HeroOptions = {}
type HeaderOptions = {
    showBrandName: boolean
}

type HeaderVariant = "start" | "center" | "end"
type HeroVariants = "start" | "center" | "end"
