import buildUrlFn from "build-url";

type QueryParameters = { [name: string]: string | string[] }

const buildUrl = (
    domainName: string,
    queryParameters?: QueryParameters,
) => {
    return buildUrlFn(domainName, {
        queryParams: queryParameters,
    })
}

export default buildUrl;
