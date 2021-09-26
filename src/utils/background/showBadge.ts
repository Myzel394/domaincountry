import { loadOptions } from "../options";

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

    extension.browserAction.setBadgeBackgroundColor({
        color: badgeColor,
    });
    extension.browserAction.setBadgeText({
        text,
    });
}

export default showBadge;
