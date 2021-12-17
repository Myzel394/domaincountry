import handleTab from "./handleTab";
import getDomain from "../getDomain";

const MAX_TABS_HANDLING_AT_ONCE = 40;

const getAllOpenedTabsWithoutDuplicates = async () => {
    const domains = new Set();

    const tabs = await extension.tabs.query({
        windowType: "normal",
    });

    // Remove tabs with duplicate domains
    return tabs.filter(tab => {
        if (!tab.url) {
            return false;
        }

        const domain = getDomain(tab.url);

        if (!domains.has(domain)) {
            domains.add(domain);
            return true;
        }

        return false;
    });
}

const initializeTabs = async () => {
    const tabs = await (async () => {
        const allTabs = await getAllOpenedTabsWithoutDuplicates();

        if (allTabs.length <= MAX_TABS_HANDLING_AT_ONCE) {
            return allTabs;
        }

        return await extension.tabs.query({
            windowType: "normal",
            // Only initialize active tabs, since if the user has many tabs open, they will get rate limited directly,
            // and it also costs a lot of bandwidth
            active: true,
        });
    })();

    await Promise.all(tabs.map(handleTab));
}

export default initializeTabs;
