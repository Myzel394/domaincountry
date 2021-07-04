import { fetchDomainInformation } from "@/apis";
import {
    getExtensionIconPath,
    getFlagPath,
    getSpecialIconPath,
    isLocalHostAddress,
    isOnionAddress,
    onUrlChange,
} from "@/utils";
import setIconsForAllSizes from "@/utils/setIconsForAllSizes";

/*
    @todo Add title
    @body Add a title to the icon using `browser.browserAction.setTitle`

    @todo Add Badge

    @todo Add settings
*/

const showExtensionIcon = () =>
    setIconsForAllSizes(size => getExtensionIconPath(size));

const showOnionAddressIcon = () =>
    setIconsForAllSizes(size => getSpecialIconPath("onion", size));

const showCountryFlagIcon = async (url: string) => {
    const domain = new URL(url).host;

    const {
        country: {
            code,
        },
    } = await fetchDomainInformation(domain);
    await setIconsForAllSizes(size => getFlagPath(code, {
        format: "PNG",
        size,
    }));
}

onUrlChange(async url => {
    if (isLocalHostAddress(url)) {
        await showExtensionIcon();
        return;
    }

    if (isOnionAddress(url)) {
        await showOnionAddressIcon();
        return;
    }

    showCountryFlagIcon(url);
});
