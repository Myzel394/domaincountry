const FLAGS = ["canonical_name"];

const getCanonicalName = async (domain: string): Promise<string> => {
    console.log("domääääne")
    const result = await browser.dns.resolve(domain, FLAGS);

    return result.canonicalName;
}

export default getCanonicalName;
