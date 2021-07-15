import { getExtensionIconPath, removeBadge, translate, setIconsForAllSizes } from "@/utils";

const showExtensionIcon = () => {
    browser.browserAction.setTitle({
        title: translate("popup_extName"),
    });
    removeBadge();

    return setIconsForAllSizes(size => getExtensionIconPath(size));
}

export default showExtensionIcon;
