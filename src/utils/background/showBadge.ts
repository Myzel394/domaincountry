import { loadOptions } from "../options";
import removeBadge from "./removeBadge";

const showBadge = async (
    tabId: number,
    text: string,
): Promise<void> => {
    const {
        allowBadge,
        badgeColor,
    } = await loadOptions();

    if (!allowBadge) {
        removeBadge(tabId);
        return;
    }

    extension.browserAction.setBadgeBackgroundColor({
        color: badgeColor,
    });
    extension.browserAction.setBadgeText({
        text,
        tabId,
    });
}

export default showBadge;
