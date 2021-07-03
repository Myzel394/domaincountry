// @ts-ignore
import tldExtract from "tld-extract";

const isOnionAddress = (url: string): boolean => {
    const { tld } = tldExtract(url, {
        allowUnknownTLD : true,
    });

    return tld === "onion";
}

export default isOnionAddress;
