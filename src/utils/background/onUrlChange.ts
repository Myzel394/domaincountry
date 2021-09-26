import getCurrentTab from "../getCurrentTab";
import Tab = browser.tabs.Tab;

const ensureTabUrl = (tab?: Tab) => {
    if (!tab?.url) {
        throw new Error("Url not defined");
    }
}

const onUrlChange = (
    callback: (newUrl: string) => any,
): void => {
    // Listen for new tabs
    browser.tabs.onActivated.addListener(async ({ tabId }) => {
        const tab: Tab = await browser.tabs.get(tabId);

        ensureTabUrl(tab);

        callback(tab.url as string);
    });

    // Listen for tab changes
    browser.tabs.onUpdated.addListener(((tabId, changeInfo, tab) => {
        if (changeInfo.url) {
            ensureTabUrl(tab);

            callback(tab.url as string);
        }
    }));

    // Listen for window changes
    browser.windows.onFocusChanged.addListener(async () => {
        const tab = await getCurrentTab();

        ensureTabUrl(tab);

        callback(tab.url as string);
    });

    // Initial load
    getCurrentTab().then(tab => {
        ensureTabUrl(tab);

        callback(tab.url as string);
    });
}

export default onUrlChange;
