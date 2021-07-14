import { fetchDomainInformation } from "@/apis";
import setIconsForAllSizes from "@/utils/setIconsForAllSizes";
import { getFlagPath, showBadgeIfAllowed } from "@/utils";

/*
@TODO: Wrong flag sometimes in toolbar
@TODO: Data stays on tab switch in Firefox
@TODO: Too big
 */

const showCountryFlagIcon = async (url: string) => {
    const domain = (new URL(url)).hostname;

    const {
        country: {
            code,
            name,
        },
        cityName,
    } = await fetchDomainInformation(domain);

    const title = `${name}, ${cityName}`;

    browser.browserAction.setTitle({
        title,
    });

    await Promise.all([
        showBadgeIfAllowed(code),
        setIconsForAllSizes(size => getFlagPath(code, {
            format: "PNG",
            size,
        })),
    ]);
}

export default showCountryFlagIcon;
