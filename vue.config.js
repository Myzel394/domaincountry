const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");
const PreprocessPlugin = require("./build-process/preprocess-plugin");
const getBrowser = require("./build-process/get-browser");

module.exports = {
    pages: {
        popup: {
            template: "public/browser-extension.html",
            entry: "./src/popup/main.ts",
            title: "Popup",
        },
        options: {
            template: "public/browser-extension.html",
            entry: "./src/options/main.ts",
            title: "Options",
        },
    },
    pluginOptions: {
        browserExtension: {
            componentOptions: {
                background: {
                    entry: "src/background.js",
                },
            },
        },
    },
    configureWebpack: {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Roboto", variants: [ "300", "500", "700", "900" ] },
                ],
            }),
            new PreprocessPlugin(getBrowser()),
        ],
    },

    chainWebpack(config) {
        // Manually inject polyfills to enable access to native `browser`.
        config.plugins.delete("provide-webextension-polyfill");
        config.module.rules.delete("provide-webextension-polyfill");
    },
}
