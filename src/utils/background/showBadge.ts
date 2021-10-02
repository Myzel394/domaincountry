import { loadOptions } from "../options";
import getCurrentTab from "../getCurrentTab";

const showBadge = async (
    text: string,
): Promise<void> => {
    const storage = extension.storage && (extension.storage.sync || extension.storage.local);

    if (!storage) {
        return;
    }

    const {
        allowBadge,
        badgeColor,
    } = await loadOptions();

    if (!allowBadge) {
        return;
    }

    const { id: currentTabId } = await getCurrentTab();

    extension.browserAction.setBadgeBackgroundColor({
        color: badgeColor,
    });
    extension.browserAction.setBadgeText({
        text,
        tabId: currentTabId,
    });
}

export default showBadge;
