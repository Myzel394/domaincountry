import { loadOptions } from "@/utils";

const showToolbarIcon = async (
    tabId: number,
    title: string,
    sizePaths: Record<string, string>,
) => {
    const {
        allowSearchBarIcon,
    } = await loadOptions();

    if (!allowSearchBarIcon) {
        return;
    }

    extension.pageAction.setTitle({
        tabId,
        title,
    });
    await extension.pageAction.setIcon({
        path: sizePaths,
        tabId,
    });
}

export default showToolbarIcon;
