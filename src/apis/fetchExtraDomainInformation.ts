import { instance } from "@/utils";

export interface FetchExtraInformationResult {
    ipAddresses: string[];
    canonicalName: string;
}

const fetchUsingExtensionDNSResolver = async (domain: string): Promise<FetchExtraInformationResult> => {
    // Fetches data using the browser's extension `dns` api - only supported by Firefox currently
    const result = await extension.dns.resolve(domain, ["canonical_name"]);

    return {
        canonicalName: result.canonicalName,
        ipAddresses: result.ipAddresses,
    }
}

const URL = "https://example.com"

const fetchUsingAPI = async (domain: string): Promise<FetchExtraInformationResult> => {
    // TODO: Fetch using url from saved setting
    const url = `${URL}/?domain=${domain}`;

    const { data } = await instance.get(url);

    return {
        canonicalName: data.canonicalName,
        ipAddresses: data.ipAddresses,
    }

}

const fetchExtraInformation = async (domain: string): FetchExtraInformationResult => {
    try {
        return await fetchUsingExtensionDNSResolver(domain);
    } catch (error) {
        return fetchUsingAPI(domain);
    }
}

export default fetchExtraInformation;
