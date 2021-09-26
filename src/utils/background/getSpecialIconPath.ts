import getPreferredColorScheme, { ColorScheme } from "./getPreferredColorScheme";

const getSpecialIconPath = (
    name: string,
    size: 64 | 32 | 16,
): string => {
    const colorScheme = getPreferredColorScheme();
    // Invert selection. Preferred scheme = dark? => dark background, so we need a light icon.
    const colorSchemeFolder = colorScheme === ColorScheme.Dark ? ColorScheme.Light : ColorScheme.Dark;

    return `/icons/${name}/${colorSchemeFolder.toLowerCase()}/${size}.png`
}

export default getSpecialIconPath;
