module.exports = {
    root: true,
    env: {
        node: true,
        webextensions: true,
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript",
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "comma-dangle": ["error", "always-multiline"],
        "vue/comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["error", "always"],
        "vue/mustache-interpolation-spacing": ["error", "always"],
        "indent": ["error", 4],
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4],
        "quotes": ["error", "double"],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 1,
                "allowFirstLine": true,
            },
            "multiline": {
                "max": 1,
                "allowFirstLine": false,
            },
        }],

        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always",
        }],
    },
}
