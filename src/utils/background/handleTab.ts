import Tab = browser.tabs.Tab;
import { isLocalHostAddress, isOnionAddress } from "@/utils";
import { showCountryFlagIcon, showExtensionIcon, showOnionAddressIcon } from "@/utils/background/index";
import setToolbarIconVisibility from "@/utils/background/setToolbarIconVisibility";

const handleTab = async (tab: Tab) => {
    const { url } = tab;

    // Ensure tab url
    if (!url) {
        return;
    }

    if (isLocalHostAddress(url)) {
        await showExtensionIcon(tab.id as number);
        return;
    }

    if (isOnionAddress(url)) {
        await showOnionAddressIcon(tab.id as number);
        return;
    }

    await showCountryFlagIcon(tab.id as number, url);
    await setToolbarIconVisibility(tab.id as number);
}

export default handleTab;
