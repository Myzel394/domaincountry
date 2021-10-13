const removeBadge = (tabId: number): void => {
    extension.browserAction.setBadgeText({
        text: "",
        tabId,
    });
}

export default removeBadge;
