import { GetFlagPathDataPNG } from "@/utils";
import showBadge from "./showBadge";
import showToolbarIcon from "@/utils/background/showToolbarIcon";

const SIZES = [16, 32, 64] as GetFlagPathDataPNG["size"][];

const mapSizes = (
    callback: ((size: GetFlagPathDataPNG["size"]) => string),
): Record<string, string> =>
    SIZES.reduce((acc, size) => {
        acc[size] = callback(size)
        return acc;
    }, {} as Record<string, string>);

const showIcon = async ({
    title,
    getIcon,
    toolbar,
    tabId,
}: {
    tabId: number,
    title: string,
    getIcon: ((size: GetFlagPathDataPNG["size"]) => string),
    toolbar?: string;
}) => {
    const paths = mapSizes(getIcon);

    extension.browserAction.setTitle({
        title: toolbar || title,
    })

    return Promise.allSettled([
        showBadge(tabId, title),
        showToolbarIcon(tabId, toolbar || title, paths),
        extension.browserAction.setIcon({
            path: paths,
            tabId,
        }),
    ])
};

export default showIcon;
