import { GetFlagPathDataPNG } from "./getFlagPath";

const SIZES = [16, 32, 64] as GetFlagPathDataPNG["size"][];

const mapSizes = (callback: ((size: GetFlagPathDataPNG["size"]) => string)) => SIZES.reduce((acc, size) => {
    acc[size] = callback(size)
    return acc;
}, {} as Record<string, string>);

const setIconsForAllSizes = async (callback: ((size: GetFlagPathDataPNG["size"]) => string)) => {
    const paths = mapSizes(callback);

    await browser.browserAction.setIcon({
        path: paths,
    });
}

export default setIconsForAllSizes;
