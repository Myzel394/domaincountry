const isLocalHostAddress = (url: string): boolean => {
    const host = (new URL(url)).host;

    return !host.includes(".");
}

export default isLocalHostAddress;
