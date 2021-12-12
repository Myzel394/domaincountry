import { handleTab } from "@/utils/background/index";

const initializeTabs = async () => {
    const tabs = await extension.tabs.query({
        windowType: "normal",
    });

    await Promise.all(tabs.map(handleTab));
}

export default initializeTabs;
