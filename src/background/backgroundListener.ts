import { onUrlChange, showExtensionIcon, showOnionAddressIcon, showCountryFlagIcon } from "@/utils/background";
import { isLocalHostAddress, isOnionAddress } from "@/utils";

onUrlChange(async url => {
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
