const removeBadge = (): void => {
    extension.browserAction.setBadgeText({
        text: "",
    });
}

export default removeBadge;
