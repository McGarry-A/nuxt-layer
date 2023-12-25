export const useLayoutStore = defineStore('layout', () => {
    const header = ref<IHeader>({
        type: "base-header",
        position: "",
        variant: "end",
        animation: "slide",
        options: {
            showBrandName: true,
        }
    });

    const menu = ref<IMenu>({
        type: "base-menu",
        animation: "slide",
    });

    const hero = ref<IHero>({
        type: "base-hero",
        animation: "slide",
        variant: "start",
        options: {},
    })

    const footer = ref<IFooter>({
        type: "base-footer",
        animation: "slide"
    })

    const about = ref<IAbout>({
        type: "base-about",
        animation: "fade"
    })

    return { header, menu, hero, footer, about }
})

interface IAbout {
    type: AboutType,
    animation: TAnimate
}
interface IFooter {
    type: FooterType,
    animation: TAnimate
}
interface IHeader {
    type: HeaderType,
    position: HeaderPosition
    animation: TAnimate
    variant: HeaderVariant
    options: HeaderOptions
}

interface IMenu {
    type: MenuType,
    animation: TAnimate
}

interface IHero {
    type: HeroType,
    variant: HeroVariants,
    options: HeroOptions,
    animation: TAnimate,
}

type MenuType = "base-menu"
type HeaderType = "base-header"
type HeroType = "base-hero"
type FooterType = "base-footer"
type AboutType = "base-about"

type TAnimate = "slide" | "fade"

type HeaderPosition = "" | "fixed" | "sticky"

type HeroOptions = {}
type HeaderOptions = {
    showBrandName: boolean
}

type HeaderVariant = "start" | "center" | "end"
type HeroVariants = "start" | "center" | "end"
