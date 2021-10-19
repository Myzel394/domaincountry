const args = require("args-parser")(process.argv);

const getBrowser = () => {
    const AVAILABLE_BROWSERS = [
        "chrome", "firefox",
    ]

    const { browser } = args;

    if (!AVAILABLE_BROWSERS.includes(browser)) {
        console.error(`Browser not valid. It must be one of ${AVAILABLE_BROWSERS.join(", ")}.`);
        process.exit(1);
    }

    return browser;
}

module.exports = getBrowser;
