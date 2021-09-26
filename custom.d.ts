type Browser = typeof browser;

declare global {
    // eslint-disable-next-line no-var
    var extension: Browser;
}

interface Window {
    extension: Browser;
}

declare const extension: Browser;
