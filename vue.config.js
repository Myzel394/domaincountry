const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");
const getBrowser = require("./build-process/get-browser");
const firefoxManifest = require("./src/manifest.firefox.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            manifestTransformer: (manifest) => {
                const browser = getBrowser();

                if (browser === "firefox") {
                    manifest.page_action = firefoxManifest.page_action;
                    manifest.sidebar_action = firefoxManifest.sidebar_action;
                    manifest.browser_specific_settings = firefoxManifest.browser_specific_settings;
                    manifest.permissions.push(...firefoxManifest.permissions)
                }

                return manifest;
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
        ],
    },

    chainWebpack(config) {
        // Manually inject polyfills to enable access to native `browser`.
        config.plugins.delete("provide-webextension-polyfill");
        config.module.rules.delete("provide-webextension-polyfill");

        config.plugins["mini-css-extract-plugin"] = new MiniCssExtractPlugin()
        config.module.rules["css-loader"] = {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }
    },
}
