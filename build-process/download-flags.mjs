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

// Create images
for (const file of files) {
    const stem = getStem(file);
    const svgFolder = `${PATH}/${stem}`
    const svgPath = `${svgFolder}/${file}`;


    await $`mkdir ${svgFolder} -p`
    // Move svg
    await $`mv repository/svg/${file} ${svgPath}`;

    for (const size of SIZES) {
        const outputPath = `${svgFolder}/${size}.png`;

        // Create image
        await $`svgexport ${svgPath} ${outputPath} ${size}:`
        // Fix image
        await $`convert ${outputPath} -background transparent -gravity center -extent ${size}x${size} ${outputPath}`;
    }
}

// Clean
await $`rm repository -r`;

