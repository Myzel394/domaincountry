import { GetFlagPathDataPNG } from "../getFlagPath";
import getCurrentTab from "../getCurrentTab";

const SIZES = [16, 32, 64] as GetFlagPathDataPNG["size"][];

const mapSizes = (
    callback: ((size: GetFlagPathDataPNG["size"]) => string),
): Record<string, string> =>
    SIZES.reduce((acc, size) => {
        acc[size] = callback(size)
        return acc;
    }, {} as Record<string, string>);

const setIconsForAllSizes = async (
    callback: ((size: GetFlagPathDataPNG["size"]) => string),
): Promise<void> => {
    const { id: currentTabId } = await getCurrentTab();
    const paths = mapSizes(callback);

    await browser.browserAction.setIcon({
        path: paths,
        tabId: currentTabId,
    });
}

export default setIconsForAllSizes;
