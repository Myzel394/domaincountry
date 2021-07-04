import { fetchDomainInformation } from "@/apis";
import setIconsForAllSizes from "@/utils/setIconsForAllSizes";
import { getFlagPath } from "@/utils";

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

    await setIconsForAllSizes(size => getFlagPath(code, {
        format: "PNG",
        size,
    }));
}

export default showCountryFlagIcon;
