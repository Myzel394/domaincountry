import getExtensionIconPath from "./getExtensionIconPath";
import removeBadge from "./removeBadge";
import translate from "../translate";
import setIconsForAllSizes from "./setIconsForAllSizes";

const showExtensionIcon = () => {
    browser.browserAction.setTitle({
        title: translate("popup_extName"),
    });
    removeBadge();

    return setIconsForAllSizes(size => getExtensionIconPath(size));
}

export default showExtensionIcon;
