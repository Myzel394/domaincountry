// Check if privacy.resistFingerprinting === true
// Only works in Firefox. Returns false if not supported.
const isResistingFingerprinting = (): boolean => {
    return browser?.privacy?.websites?.resistFingerprinting?.get?.({}) ?? false;
}

export default isResistingFingerprinting;
