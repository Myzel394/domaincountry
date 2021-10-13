import { fetchDomainInformation } from "@/apis";
import getFlagPath from "../getFlagPath";
import * as domainData from "../domainData";
import showIcon from "@/utils/background/showIcon";

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

    await Promise.all([
        domainData.saveData(domain, data),
        await showIcon({
            getIcon: size => getFlagPath(code, {
                format: "PNG",
                size,
            }),
            title: code,
            toolbar: title,
        }),
    ]);
}

export default showCountryFlagIcon;
