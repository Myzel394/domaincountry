import { domainData } from "@/utils";
import { handleActiveTabs, handleStorageChange } from "@/utils/background";

extension.runtime.onStartup.addListener(domainData.clearData);
extension.storage.onChanged.addListener(handleStorageChange);
extension.pageAction.onClicked.addListener(() => extension.browserAction.openPopup());

// Handle on start
handleActiveTabs();

