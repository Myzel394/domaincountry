import { fetchDomainInformation } from "@/apis";
import {
    getFlagPath,
    getSpecialIconPath,
    isLocalHostAddress,
    isOnionAddress,
    onUrlChange,
} from "@/utils";
import setIconsForAllSizes from "@/utils/setIconsForAllSizes";

const showLocalHostIcon = () =>
    setIconsForAllSizes(size => getSpecialIconPath("home", size));

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
        await showLocalHostIcon();
        return;
    }

    if (isOnionAddress(url)) {
        await showOnionAddressIcon();
        return;
    }

    await showCountryFlagIcon(url);
});