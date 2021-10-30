import getExtensionIconPath from "./getExtensionIconPath";
import translate from "../translate";
import showIcon from "@/utils/background/showIcon";

const showExtensionIcon = (tabId: number) => {
    return showIcon({
        title: translate("popup_extName"),
        getIcon: size => getExtensionIconPath(size),
        tabId,
    });
}

export default showExtensionIcon;
