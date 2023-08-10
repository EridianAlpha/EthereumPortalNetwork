import { extendTheme } from "@chakra-ui/react"
import type { StyleFunctionProps } from "@chakra-ui/styled-system"
import { cssVar } from "@chakra-ui/theme-tools"
import { lighten, darken } from "polished"

function lightenColor(colorMode, mainColor, value) {
    return colorMode === "dark" ? lighten(value, mainColor) : darken(value, mainColor)
}
function darkenColor(colorMode, mainColor, value) {
    return colorMode === "dark" ? darken(value, mainColor) : lighten(value, mainColor)
}

const customTheme = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            ".bgPage": {
                bg: props.colorMode === "dark" ? "pageBackground.dark" : "pageBackground.light",
            },
            ".hero-container": {
                bg:
                    props.colorMode === "dark"
                        ? lightenColor(props.colorMode, props.theme.colors.pageBackground.dark, 0.05)
                        : "contentBackground.light",
            },
            ".faq-container": {
                bg:
                    props.colorMode === "dark"
                        ? lightenColor(props.colorMode, props.theme.colors.pageBackground.dark, 0.1)
                        : "contentBackground.light",
            },
        }),
    },
    components: {
        Link: {
            baseStyle: (props: StyleFunctionProps) => ({
                color: "blue",
            }),
        },
        Code: {
            baseStyle: (props: StyleFunctionProps) => ({
                bg: props.colorMode === "dark" ? "pageBackgroundHover.dark" : "contentBackground.light",
                // borderColor: darkenColor(props.colorMode, props.theme.colors.border.dark, 0.05),
            }),
        },
        Card: {
            baseStyle: (props: StyleFunctionProps) => ({
                container: {
                    bg:
                        props.colorMode === "dark"
                            ? lightenColor(props.colorMode, props.theme.colors.pageBackground.dark, 0.1)
                            : "contentBackground.light",
                },
            }),
            variants: {
                darkCard: (props: StyleFunctionProps) => ({
                    container: {
                        bg:
                            props.colorMode === "dark"
                                ? lightenColor(props.colorMode, props.theme.colors.pageBackground.dark, 0.05)
                                : "contentBackground.light",
                    },
                }),
            },
        },
    },
    colors: {
        pageBackground: {
            light: "#FFFFFF",
            dark: "#010916",
        },
        pageBackgroundHover: {
            light: "#EDF2F7",
            dark: "#2a114c",
        },
        contentBackground: {
            light: "#EEEFF1",
            dark: "#0e052c",
        },
        border: {
            light: "#D3D3D3",
            dark: "#54199b",
        },
        checklistBar: {
            light: "#dfdfdf",
            dark: "#0c081b",
        },
        tableBorder: {
            light: "#EDF2F7",
            dark: "rgb(255, 255, 255, 0.2)",
        },
        divider: {
            light: "#dfdfdf",
            dark: "rgb(255, 255, 255, 0.2)",
        },
        gold: "#e7c60d",
        red: "#EF4444",
        green: "#289e33",
        blue: "#0361FB",
        pink: "#b124b1",
        purple: "#54199b",
        orange: "#FEB400",
    },
})

export default customTheme
