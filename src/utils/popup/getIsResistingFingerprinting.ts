import { Request } from "@/background/backgroundEvents";

const REQUEST: Request = {
    action: "isResistingFingerprinting",
}

const getIsResistingFingerprinting = async (): Promise<boolean> => {
    const { result } = await browser.runtime.sendMessage(REQUEST);

    return result;
}

export default getIsResistingFingerprinting;
