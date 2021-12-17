import { handleTab } from "@/utils/background/index";

const initializeTabs = async () => {
    const tabs = await extension.tabs.query({
        windowType: "normal",
        // Only initialize active tabs, since if the user has many tabs open, they will get rate limited directly,
        // and it also costs a lot of bandwidth
        active: true,
    });

    await Promise.all(tabs.map(handleTab));
}

export default initializeTabs;
