import Tab = browser.tabs.Tab;

const getCurrentTab = async (): Promise<Tab> => {
    let currentTab: Tab;

    try {
        currentTab = (await browser.tabs.query({
            active: true,
            windowId: browser.windows.WINDOW_ID_CURRENT,
        }))[0];
    } catch {
        currentTab = await browser.tabs.getCurrent();
    }

    if (!currentTab) {
        throw new Error("Tab undefined");
    }

    return currentTab;
}

export default getCurrentTab;
