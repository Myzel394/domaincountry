import setIconsForAllSizes from "@/utils/setIconsForAllSizes";
import { getSpecialIconPath, removeBadge, translate } from "@/utils";

const showOnionAddressIcon = () => {
    browser.browserAction.setTitle({
        title: translate("popup_hoverTitle_onionService"),
    });
    removeBadge();

    return setIconsForAllSizes(size => getSpecialIconPath("onion", size));
}

export default showOnionAddressIcon;
