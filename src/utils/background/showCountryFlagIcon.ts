import { fetchDomainInformation } from "@/apis";
import { showIcon } from "@/utils/background";
import { getDomain } from "@/utils";
import getFlagPath from "../getFlagPath";
import * as domainData from "../domainData";

const showCountryFlagIcon = async (tabId: number, url: string) => {
    const domain = getDomain(url);

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
            tabId,
        }),
    ]);
}

export default showCountryFlagIcon;
