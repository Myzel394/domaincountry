const isSearchBarIconShown = async (tabId: number): Promise<boolean> => {
    try {
        // @ts-ignore
        return extension.pageAction.isShown({
            tabId: tabId,
        })
    } catch {
        return false;
    }
};

export default isSearchBarIconShown;
