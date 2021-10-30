const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const { getAllFilesSync } = require("get-all-files");


class PreprocessPlugin extends CopyPlugin {
    static getPatterns(browser) {
        const filenameRegex = `^(.*)\\.(${browser})\\.(.*)$`;

        console.info(`Using pattern "${filenameRegex}" to preprocess files.`);

        const patterns = [];

        for (const filePath of getAllFilesSync("./src")) {
            const filename = path.basename(filePath);
            const match = filename.match(filenameRegex);

            if (match) {
                const [, name,, suffix] = match;
                const newName = `${name}.${suffix}`;
                const newPath = path.join(filePath, "..", newName);

                const pattern = {
                    from: filePath,
                    to: newPath,
                };
                patterns.push(pattern);
            }
        }

        return patterns;
    }

    constructor(browser, options) {
        const patterns = PreprocessPlugin.getPatterns(browser);

        super({
            ...options,
            patterns,
        });
    }
}

module.exports = PreprocessPlugin;
