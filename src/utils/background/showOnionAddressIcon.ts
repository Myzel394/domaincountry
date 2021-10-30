import getSpecialIconPath from "./getSpecialIconPath";
import translate from "../translate"
import showIcon from "@/utils/background/showIcon";

const showOnionAddressIcon = (tabId: number) => {
    return showIcon({
        title: translate("extension@hover_title@is_onion_service"),
        getIcon: size => getSpecialIconPath("onion", size),
        tabId,
    });
}

export default showOnionAddressIcon;
