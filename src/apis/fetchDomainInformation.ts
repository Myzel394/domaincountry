import * as yup from "yup";
import { ValidateOptions } from "yup/lib/types";
import { buildUrl, getBrowserLanguageCode, instance } from "@/utils";
import fetchExtraDomainInformation, { FetchExtraInformationResult } from "./fetchExtraDomainInformation";

export interface FetchDomainInformationResult {
    country: {
        name: string;
        code: string;
    };
    cityName: string;

    organisationName: string;
    ispName: string;
    timezone: {
        name: string;
        offset: number;
    };
    ipAddresses: string[];
    canonicalName: string;

    currency: string;

    isMobile: boolean;
    isProxy: boolean;
    isHosting: boolean;
}

const URL = "http://ip-api.com/json";

const FIELDS = [
    "country", "city", "timezone", "offset", "currency", "isp", "org", "mobile", "proxy", "hosting", "query",
    "countryCode",
]

// ip-api.com doesn't support https, validate the data before using it
const SCHEMA = yup.object().shape({
    country: yup.string().required(),
    countryCode: yup.string().required(),
    city: yup.string().required(),

    timezone: yup.string().required(),
    offset: yup.number().required(),

    currency: yup.string().required(),

    isp: yup.string().required(),
    org: yup.string().required(),
    query: yup.string().required(),

    mobile: yup.boolean().required(),
    proxy: yup.boolean().required(),
    hosting: yup.boolean().required(),
});

const SCHEMA_OPTION: ValidateOptions = {
    abortEarly: true,
    stripUnknown: true,
}

const getExtraInformation = async (
    domain: string,
    ipAddress: string,
): Promise<FetchExtraInformationResult> => {
    try {
        return await fetchExtraDomainInformation(domain);
    } catch (error) {
        return {
            canonicalName: domain,
            ipAddresses: [
                ipAddress,
            ],
        }
    }
};

const fixTimezoneName = (timezone: string): string =>
    timezone
        .replaceAll("/", ": ")
        .replaceAll("_", " ");

const fetchDomainInformation = async (domain: string): Promise<FetchDomainInformationResult> => {
    const language = getBrowserLanguageCode();
    const url = buildUrl(`${URL}/${domain}`, {
        fields: FIELDS,
        lang: language,
    });

    const { data } = await instance.get(url);

    const validatedData = await SCHEMA.validate(data, SCHEMA_OPTION);
    const ipAddress = validatedData.query;
    const extraData = await getExtraInformation(domain, ipAddress);
    const cleanedData: FetchDomainInformationResult = {
        country: {
            name: validatedData.country,
            code: validatedData.countryCode,
        },
        ipAddresses: extraData.ipAddresses,
        canonicalName: extraData.canonicalName,
        cityName: validatedData.city,
        currency: validatedData.currency,
        isHosting: validatedData.hosting,
        isMobile: validatedData.mobile,
        ispName: validatedData.isp,
        isProxy: validatedData.proxy,
        organisationName: validatedData.org,
        timezone: {
            name: fixTimezoneName(validatedData.timezone),
            offset: validatedData.offset,
        },
    };

    return cleanedData;
}

export default fetchDomainInformation;
