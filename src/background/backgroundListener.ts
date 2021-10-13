import { setToolbarIconVisibility, isSearchBarIconShown, handleTab, onTabChange, showExtensionIcon } from "@/utils/background";

onTabChange(async tab => {
    setToolbarIconVisibility();
    const isIconShown = await isSearchBarIconShown();

    if (!isIconShown) {
        await showExtensionIcon();
    }

    await handleTab(tab);
});
