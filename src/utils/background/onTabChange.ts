import getCurrentTab from "../getCurrentTab";
import Tab = browser.tabs.Tab;

const onTabChange = (
    callback: (tab: Tab) => any,
): void => {
    // Listen for new tabs
    extension.tabs.onActivated.addListener(async ({ tabId }) => {
        const tab: Tab = await extension.tabs.get(tabId);

        if (tab) {
            callback(tab);
        }
    });

    // Listen for tab changes
    extension.tabs.onUpdated.addListener(((tabId, changeInfo, tab) => {
        if (tab) {
            callback(tab);
        }
    }));

    // Listen for window changes
    extension.windows.onFocusChanged.addListener(async () => {
        const tab = await getCurrentTab();

        if (tab) {
            callback(tab);
        }
    });

    // Initial load
    getCurrentTab().then(tab => {
        if (tab) {
            callback(tab);
        }
    });
}

export default onTabChange;
