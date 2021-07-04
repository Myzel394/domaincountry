const removeBadge = (): void => {
    browser.browserAction.setBadgeText({
        text: "",
    });
}

export default removeBadge;
