const isLocalHostAddress = (url: string): boolean => {
    const host = (new URL(url)).hostname;

    return !host.includes(".") || (host === "127.0.0.1");
}

export default isLocalHostAddress;
