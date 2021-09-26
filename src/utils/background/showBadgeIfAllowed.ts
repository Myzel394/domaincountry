import { loadOptions } from "../options";

const showBadgeIfAllowed = async (
    text: string,
): Promise<void> => {
    const storage = browser.storage && (browser.storage.sync || browser.storage.local);

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

    browser.browserAction.setBadgeBackgroundColor({
        color: badgeColor,
    });
    browser.browserAction.setBadgeText({
        text,
    });
}

export default showBadgeIfAllowed;
