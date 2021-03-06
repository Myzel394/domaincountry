// Check if privacy.resistFingerprinting === true
// Only works in Firefox. Returns false if not supported.
const isResistingFingerprinting = async (): Promise<boolean> => {
    try {
        // @ts-ignore
        const result = await extension.privacy.websites.resistFingerprinting.get({});

        return result?.value ?? false;
    } catch (error) {
        return false;
    }
}

export default isResistingFingerprinting;
