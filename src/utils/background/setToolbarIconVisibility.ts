import { loadOptions } from "../options";

const setToolbarIconVisibility = async (tabId: number) => {
    if (!extension.pageAction) {
        return
    }

    const {
        allowSearchBarIcon,
    } = await loadOptions();

    if (allowSearchBarIcon) {
        await extension.pageAction.show(tabId);
        return true;
    } else {
        await extension.pageAction.hide(tabId);
        return false;
    }
}

export default setToolbarIconVisibility;
