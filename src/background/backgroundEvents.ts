import { domainData, loadOptions } from "@/utils";
import getCurrentTab from "../utils/getCurrentTab";
import { showExtensionIcon } from "@/utils/background";

extension.runtime.onStartup.addListener(async () => {
    await domainData.clearData();

    const {
        allowSearchBarIcon,
    } = await loadOptions();

    if (allowSearchBarIcon) {
        const { id: currentTabId } = await getCurrentTab();

        extension.pageAction.show(currentTabId);
        await showExtensionIcon();
    }
});
