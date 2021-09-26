import UAParser from "ua-parser-js";
import { version } from "../../../package.json";

const createBugReport = (): string => {
    const uaResult = UAParser(navigator.userAgent);
    const report = {
        "os": `${uaResult.os.name} (${uaResult.os.version})`,
        "browser": `${uaResult.browser.name} (${uaResult.browser.version})`,
        "extension_version": version,
    };

    const messages = Object
        .entries(report)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

    return `\`\`\`
${messages}
\`\`\``;
}

export default createBugReport;
