import { handleTab } from "@/utils/background/index";

const handleActiveTabs = async () => {
    const tabs = await browser.tabs.query({
        active: true,
        windowType: "normal",
    });

    await Promise.all(tabs.map(handleTab));
}

export default handleActiveTabs;
