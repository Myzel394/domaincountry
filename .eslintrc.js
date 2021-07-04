module.exports = {
    root: true,

    env: {
        node: true,
        webextensions: true,
    },

    plugins: [
        "unused-imports",
    ],

    extends: [
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
        "vue/attributes-order": ["error", {
            "order": [
                "DEFINITION",
                "LIST_RENDERING",
                "CONDITIONALS",
                "RENDER_MODIFIERS",
                "GLOBAL",
                ["UNIQUE", "SLOT"],
                "TWO_WAY_BINDING",
                "OTHER_DIRECTIVES",
                "OTHER_ATTR",
                "EVENTS",
                "CONTENT",
            ],
            "alphabetical": false,
        }],

        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always",
        }],

        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" },
        ],
    },

    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
}
