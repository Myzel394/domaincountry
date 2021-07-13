import Tab = browser.tabs.Tab;

const METHODS = [
    async () => (await browser.tabs.query({
        active: true,
        windowId: browser.windows.WINDOW_ID_CURRENT,
    }))[0],
    async () => (await browser.tabs.query({
        active: true,
    }))[0],
    async () => await browser.tabs.getCurrent(),
    async () => (await browser.tabs.query({}))[0],
]

const getCurrentTab = async (): Promise<Tab> => {
    for (const getTab of METHODS) {
        try {
            const tab = await getTab();

            return tab;
            // eslint-disable-next-line no-empty
        } catch (err) {}
    }

    throw new Error("Couldn't get current tab");
}

export default getCurrentTab;
