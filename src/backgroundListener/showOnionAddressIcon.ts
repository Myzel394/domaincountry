import setIconsForAllSizes from "@/utils/setIconsForAllSizes";
import { getSpecialIconPath, translate } from "@/utils";

const showOnionAddressIcon = () => {
    browser.browserAction.setTitle({
        title: translate("hoverTitle_onionService"),
    });

    return setIconsForAllSizes(size => getSpecialIconPath("onion", size));
}

export default showOnionAddressIcon;
