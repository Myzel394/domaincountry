export enum ColorScheme {
    Light = "LIGHT",
    Dark = "DARK"
}

const getPreferredColorScheme = (): "LIGHT" | "DARK" =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? ColorScheme.Dark : ColorScheme.Light;

export default getPreferredColorScheme;
