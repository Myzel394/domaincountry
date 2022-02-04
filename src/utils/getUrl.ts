const getUrl = (url: string | null | undefined): string | null => {
    if (!url) {
        return null;
    }

    const urlFragments = new URL(url);

    if (urlFragments.protocol === "about:" && urlFragments.pathname === "reader") {
        const searchParams = new URLSearchParams(urlFragments.search);

        return searchParams.get("url");
    }

    return url;
}

export default getUrl;
