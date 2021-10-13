import { onUrlChange, showExtensionIcon, showOnionAddressIcon, showCountryFlagIcon } from "@/utils/background";
import { isLocalHostAddress, isOnionAddress } from "@/utils";
import setToolbarIconVisibility from "@/utils/background/setToolbarIconVisibility";

onUrlChange(async url => {
    await setToolbarIconVisibility();

    if (isLocalHostAddress(url)) {
        await showExtensionIcon();
        return;
    }

    if (isOnionAddress(url)) {
        await showOnionAddressIcon();
        return;
    }

    await showCountryFlagIcon(url);
});
