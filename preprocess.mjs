#!/usr/bin/env zx

const args = require("args-parser")(process.argv);
const path = require("path");
const fs = require("fs");
const { getAllFiles } = require("get-all-files");

const AVAILABLE_BROWSERS = [
    "chrome", "firefox"
]

const {browser} = args;

if (!AVAILABLE_BROWSERS.includes(browser)) {
    console.error(`Browser not valid. It must be one of ${AVAILABLE_BROWSERS.join(", ")}.`);
    process.exit(1);
}

const filenameRegex = `^(.*)\\.(${browser})\\.(.*)$`;

console.info(`Using pattern "${filenameRegex}" to preprocess files.`);

for await (const filePath of getAllFiles("./src")) {
    const filename = path.basename(filePath);
    const match = filename.match(filenameRegex);

    if (match) {
        const [, name,, suffix] = match;
        const newName = `${name}.${suffix}`;
        const newPath = path.join(filePath, "..", newName)

        await fs.rename(filePath, newPath);
    }
}
