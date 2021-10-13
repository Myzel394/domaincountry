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
        await showExtensionIcon();
        return;
    }

    if (isOnionAddress(url)) {
        await showOnionAddressIcon();
        return;
    }

    await showCountryFlagIcon(url);

    await setToolbarIconVisibility();
}

export default handleTab;
