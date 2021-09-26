import { domainData } from "@/utils";
import { isResistingFingerprinting } from "@/utils/background";
import MessageSender = browser.runtime.MessageSender;

export interface Request {
    action: string;
    payload?: any;
}

browser.runtime.onStartup.addListener(domainData.clearData);

// Forward API requests
browser.runtime.onMessage.addListener((
    request: object,
    sender: MessageSender,
    sendResponse: (value: any) => void,
) => {
    const { action } = request as Request;

    switch (action) {
    case "isResistingFingerprinting": {
        console.log("onmässage");
        isResistingFingerprinting()
            .then(result =>
                sendResponse({
                    result,
                }),
            );
        return true;
    }
    }
});
