import getSpecialIconPath from "./getSpecialIconPath";
import translate from "../translate"
import showIcon from "@/utils/background/showIcon";

const showOnionAddressIcon = () => {
    return showIcon({
        title: translate("extension@hover_title@is_onion_service"),
        getIcon: size => getSpecialIconPath("onion", size),
    })
}

export default showOnionAddressIcon;
