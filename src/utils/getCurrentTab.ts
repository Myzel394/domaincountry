import Tab = browser.tabs.Tab;

const getCurrentTab = async (): Promise<Tab> => {
    const tabs = await browser.tabs.query({
        active: true,
        windowId: browser.windows.WINDOW_ID_CURRENT,
    });

    if (!tabs[0].id) {
        throw new Error("Tab undefined");
    }

    const tab = await browser.tabs.get(tabs[0].id);

    return tab;
}

export default getCurrentTab;
