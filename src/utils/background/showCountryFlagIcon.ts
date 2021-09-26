import { fetchDomainInformation } from "@/apis";
import setIconsForAllSizes from "./setIconsForAllSizes";
import getFlagPath from "../getFlagPath";
import showBadgeIfAllowed from "./showBadgeIfAllowed";
import * as domainData from "../domainData";

const showCountryFlagIcon = async (url: string) => {
    const domain = (new URL(url)).hostname;

    const data = await fetchDomainInformation(domain);

    const {
        country: {
            code,
            name,
        },
        cityName,
    } = data;
    const title = `${name}, ${cityName}`;

    browser.browserAction.setTitle({
        title,
    });

    await Promise.all([
        domainData.saveData(domain, data),
        showBadgeIfAllowed(code),
        setIconsForAllSizes(size => getFlagPath(code, {
            format: "PNG",
            size,
        })),
    ]);
}

export default showCountryFlagIcon;
