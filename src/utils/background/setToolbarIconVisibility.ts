import { getCurrentTab, loadOptions } from "@/utils";

const setToolbarIconVisibility = async () => {
    const { id: currentTabId } = await getCurrentTab() as {id: number};

    const {
        allowSearchBarIcon,
    } = await loadOptions();

    if (allowSearchBarIcon) {
        extension.pageAction.show(currentTabId);
    } else {
        extension.pageAction.hide(currentTabId);
    }
}

export default setToolbarIconVisibility;
