const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
    pages: {
        popup: {
            template: "public/browser-extension.html",
            entry: "./src/popup/main.js",
            title: "Popup",
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
        ],
    },
}
