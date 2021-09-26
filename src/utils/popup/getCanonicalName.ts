const FLAGS = ["canonical_name"];

const getCanonicalName = async (domain: string): Promise<string> => {
    // @ts-ignore
    const result = await browser.dns.resolve(domain, FLAGS);

    return result.canonicalName;
}

export default getCanonicalName;
