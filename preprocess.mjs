#!/usr/bin/env zx

const mvmv = require("mvmv");
const args = require("args-parser")(process.argv);

const AVAILABLE_BROWSERS = [
    "chrome", "firefox"
]

const {browser} = args;

if (!AVAILABLE_BROWSERS.includes(browser)) {
    console.error(`Browser not valid. It must be one of ${AVAILABLE_BROWSERS.join(", ")}.`);
    exit(-1);
}

const pattern = `*.${browser}.*`;
const newPattern = `*.*`;

console.info(`Using pattern "${pattern}" to preprocess files.`);
mvmv.exec(pattern, newPattern);
