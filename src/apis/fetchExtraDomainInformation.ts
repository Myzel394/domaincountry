import { instance, loadOptions } from "@/utils";

export interface FetchExtraInformationResult {
    ipAddresses: string[];
    canonicalName: string;
}

const fetchUsingExtensionDNSResolver = async (domain: string): Promise<FetchExtraInformationResult> => {
    // Fetches data using the browser's extension `dns` api - only supported by Firefox currently
    // @ts-ignore
    const result = await extension.dns.resolve(domain, ["canonical_name"]);

    return {
        canonicalName: result.canonicalName,
        ipAddresses: result.addresses,
    }
}

const fetchUsingAPI = async (domain: string): Promise<FetchExtraInformationResult> => {
    const options = await loadOptions();
    const baseUrl = options.queryAPIURL;

    const url = `${baseUrl}/?domain=${domain}`;

    const { data } = await instance.get(url);

    return {
        canonicalName: data.canonical_name,
        ipAddresses: data.ip_addresses,
    }

}

const fetchExtraInformation = async (domain: string): Promise<FetchExtraInformationResult> => {
    try {
        return await fetchUsingExtensionDNSResolver(domain);
    } catch (error) {
        return fetchUsingAPI(domain);
    }
}

export default fetchExtraInformation;
