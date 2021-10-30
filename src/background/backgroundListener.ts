import {
    setToolbarIconVisibility,
    isSearchBarIconShown,
    handleTab,
    onTabChange,
    showExtensionIcon,
} from "@/utils/background";

onTabChange(async tab => {
    const currentTabId = tab.id as number;
    const isSearchBarIconEnabled = await setToolbarIconVisibility(currentTabId);

    if (isSearchBarIconEnabled) {
        const isIconShown = await isSearchBarIconShown(currentTabId);

        if (!isIconShown) {
            await showExtensionIcon(currentTabId);
        }
    }

    await handleTab(tab);
});
