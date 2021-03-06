import Tab = browser.tabs.Tab;

const METHODS = [
    async () => (await extension.tabs.query({
        active: true,
        windowId: extension.windows.WINDOW_ID_CURRENT,
    }))[0],
    async () => (await extension.tabs.query({
        active: true,
    }))[0],
    async () => await extension.tabs.getCurrent(),
    async () => (await extension.tabs.query({}))[0],
]

const getCurrentTab = async (): Promise<Tab> => {
    for (const getTab of METHODS) {
        try {
            return await getTab();
            // eslint-disable-next-line no-empty
        } catch (err) {}
    }

    // A tab will always be returned, this line is only required for Typescript to work.
    // @ts-ignore
    return undefined as Tab;
}

export default getCurrentTab;
