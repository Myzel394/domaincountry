#!/usr/bin/env zx

const PATH = "public/icons/flags"
const SIZES = [16, 32, 64];
const FLAG_REPOSITORY = "https://github.com/hampusborgos/country-flags.git";

const getStem = (file) => file.split(".")[0];

// Download
await $`git clone ${FLAG_REPOSITORY} repository`;
const {stdout} = await $`ls repository/svg`
const files = stdout.split(`\n`);
files.pop()

await $`mkdir ${PATH} -p`;

// Convert
await Promise.all(files.map(async file => {
    const stem = getStem(file);
    const svgFolder = `${PATH}/${stem}`
    const svgPath = `${svgFolder}/${file}`;

    await $`mkdir ${svgFolder} -p`
    await $`mv repository/svg/${file} ${svgPath}`;

    await Promise.all(SIZES.map(async size => {
        const outputPath = `${svgFolder}/${size}.png`;

        await $`svgexport ${svgPath} ${outputPath} ${size}:`
        await $`magick ${outputPath} -background transparent -gravity center -extent ${size}x${size} ${outputPath}`;
    }))
}));

// Clean
await $`rm repository -r`;

