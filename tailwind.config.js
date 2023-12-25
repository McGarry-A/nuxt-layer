/** @type {import('tailwindcss').Config} */

export default {
    content: [],
    theme: {
        extend: {
            colors: {
                clear: "var(--clear)",
                subtle: "var(--subtle)",
                "inverse-clear": "var(--inverse-clear)",
                "inverse-subtle": "var(--inverse-subtle)",

                brand: {
                    subtle: "var(--brand-subtle)",
                    DEFAULT: "var(--brand)",
                    strong: "var(--brand-strong)"
                },
                secondary: {
                    subtle: "var(--secondary-subtle)",
                    DEFAULT: "var(--secondary)",
                    strong: "var(--secondary-strong)"
                },
                surface: {
                    bg: "var(--surface-bg)",
                    "elevation-low": "var(--surface-elevation-low)",
                    "elevation-high": "var(--surface-elevation-high)",
                },
            },

            maxWidth: {
                "content-wrapper": "1640px"
            },

            minHeight: {
                "hero-height": "50vh"
            },

            margin: {
                "section-margin": "var(--section-margin)"
            },

            fontFamily: {
                primary: "var(--font-primary)",
                secondary: "var(--font-secondary)",
                tertiary: "var(--font-tertiary)"
            },
        },
    },
    plugins: [],
}

