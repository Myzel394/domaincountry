import { getDomain } from "@/utils";

const isLocalHostAddress = (url: string): boolean => {
    const host = getDomain(url);

    return !host.includes(".") || (host === "127.0.0.1");
}

export default isLocalHostAddress;
