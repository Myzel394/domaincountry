import { getCurrentTab, loadOptions } from "@/utils";

const setToolbarIconVisibility = async () => {
    const { id: currentTabId } = await getCurrentTab() as {id: number};

    const {
        allowSearchBarIcon,
    } = await loadOptions();

    if (allowSearchBarIcon) {
        await extension.pageAction.show(currentTabId);
    } else {
        await extension.pageAction.hide(currentTabId);
    }
}

export default setToolbarIconVisibility;
