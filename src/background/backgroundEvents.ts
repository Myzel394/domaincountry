import { domainData } from "@/utils";
import { handleActiveTabs, handleStorageChange } from "@/utils/background";

extension.runtime.onStartup.addListener(domainData.clearData);
extension.storage.onChanged.addListener(handleStorageChange);

// Handle on start
handleActiveTabs();

