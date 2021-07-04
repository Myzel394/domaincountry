import { getExtensionIconPath, translate } from "@/utils";
import setIconsForAllSizes from "@/utils/setIconsForAllSizes";

const showExtensionIcon = () => {
    browser.browserAction.setTitle({
        title: translate("popup_extName"),
    });
    return setIconsForAllSizes(size => getExtensionIconPath(size));
}

export default showExtensionIcon;
