import setIconsForAllSizes from "./setIconsForAllSizes";
import getSpecialIconPath from "./getSpecialIconPath";
import removeBadge from "./removeBadge";
import translate from "../translate"

const showOnionAddressIcon = () => {
    extension.browserAction.setTitle({
        title: translate("popup_hoverTitle_onionService"),
    });
    removeBadge();

    return setIconsForAllSizes(size => getSpecialIconPath("onion", size));
}

export default showOnionAddressIcon;
