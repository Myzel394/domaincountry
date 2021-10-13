import { loadOptions } from "@/utils";
import getCurrentTab from "../getCurrentTab";

const showToolbarIcon = async (
    title: string,
    sizePaths: string[],
) => {
    const {
        allowSearchBarIcon,
    } = await loadOptions();

    if (!allowSearchBarIcon) {
        return;
    }

    const { id: currentTabId } = await getCurrentTab();

    extension.pageAction.setTitle({
        tabId: currentTabId,
        title,
    });
    await extension.pageAction.setIcon({
        path: sizePaths,
        tabId: currentTabId,
    });
}

export default showToolbarIcon;
