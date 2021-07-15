import { isLocalHostAddress, isOnionAddress, onUrlChange } from "@/utils";
import showExtensionIcon from "./showExtensionIcon";
import showOnionAddressIcon from "./showOnionAddressIcon";
import showCountryFlagIcon from "./showCountryFlagIcon";

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
