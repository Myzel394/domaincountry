#!/usr/bin/env zx

const getBrowser = require("./get-browser.js");
const packageJson = require("./package.json");

const browser = getBrowser();
const {name, version} = packageJson;

console.log(`${name}-${version}-${browser}.zip`)
