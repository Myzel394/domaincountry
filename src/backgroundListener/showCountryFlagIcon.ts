import { fetchDomainInformation } from "@/apis";
import setIconsForAllSizes from "@/utils/setIconsForAllSizes";
import { getFlagPath, showBadgeIfAllowed } from "@/utils";

const showCountryFlagIcon = async (url: string) => {
    const domain = new URL(url).host;

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
