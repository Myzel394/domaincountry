import getExtensionIconPath from "./getExtensionIconPath";
import translate from "../translate";
import showIcon from "@/utils/background/showIcon";

const showExtensionIcon = () => {
    return showIcon({
        title: translate("popup_extName"),
        getIcon: size => getExtensionIconPath(size),
    })
}

export default showExtensionIcon;
