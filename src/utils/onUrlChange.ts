import { getCurrentTab } from "@/utils";

const onUrlChange = (
    callback: (newUrl: string) => any,
): void => {
    // Listen for new tabs
    browser.tabs.onActivated.addListener(async ({ tabId }) => {
        const tab = await browser.tabs.get(tabId);

        if (!tab?.url) {
            throw new Error("Url not defined");
        }

        callback(tab.url);
    });

    // Listen for tab changes
    browser.tabs.onUpdated.addListener(((tabId, changeInfo, tab) => {
        if (changeInfo.url) {
            if (!tab?.url) {
                throw new Error("Url not defined");
            }

            callback(tab.url);
        }
    }));

    // Initial load
    getCurrentTab().then(tab => {
        if (tab.url) {
            callback(tab.url);
        }
    });
}

export default onUrlChange;
