import buildUrlFn from "build-url";

type QueryParameters = Record<string, string | string[]>;

const buildUrl = (
    domainName: string,
    queryParameters?: QueryParameters,
): string =>
    buildUrlFn(domainName, {
        queryParams: queryParameters,
    });

export default buildUrl;
