const isLocalHostAddress = (url: string): boolean => {
    const host = (new URL(url)).hostname;

    return !host.includes(".");
}

export default isLocalHostAddress;
