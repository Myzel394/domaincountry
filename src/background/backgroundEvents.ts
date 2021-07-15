import { domainData } from "@/utils";

browser.runtime.onStartup.addListener(domainData.clearData);
