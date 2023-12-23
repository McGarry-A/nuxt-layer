/** @type {import('tailwindcss').Config} */

export default {
    content: [],
    theme: {
        extend: {
            colors: {
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
                clear: "var(--clear)",
                subtle: "var(--subtle)",
                "inverse-clear": "var(--inverse-clear)",
                "inverse-subtle": "var(--inverse-subtle)",
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

            fontFamily: {
                primary: "var(--font-primary)",
                secondary: "var(--font-secondary)",
                tertiary: "var(--font-tertiary)"
            },
        },
    },
    plugins: [],
}

