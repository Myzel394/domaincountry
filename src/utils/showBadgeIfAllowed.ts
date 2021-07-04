const KEY = "options";

const showBadgeIfAllowed = async (
    text: string,
): Promise<void> => {
    const storage = browser.storage && (browser.storage.sync || browser.storage.local);

    if (!storage) {
        return;
    }

    const givenData = (await storage.get([KEY]))[KEY] as any;
    const {
        allowBadge,
        badgeColor,
    } = Object.assign(
        {
            allowBadge: false,
            badgeColor: "#fff",
        },
        givenData || {},
    );

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
