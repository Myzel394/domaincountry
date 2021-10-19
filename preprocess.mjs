#!/usr/bin/env zx

const path = require("path");
const fs = require("fs");
const { getAllFiles } = require("get-all-files");
const getBrowser = require("./getBrowser.js");

const browser = getBrowser();

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
