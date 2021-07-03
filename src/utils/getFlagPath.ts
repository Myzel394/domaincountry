export interface GetFlagPathDataSVG {
    format: "SVG";
}

export interface GetFlagPathDataPNG {
    format: "PNG";
    size: 16 | 32 | 64;
}

export type GetFlagPathData = GetFlagPathDataSVG | GetFlagPathDataPNG;

const getFlagPath = (
    countryName: string,
    {
        format,
        // @ts-ignore
        size,
    }: GetFlagPathData,
): string => {

    const basePath = `/icons/flags/${countryName.toLowerCase()}/`;
    const filename = (() => {
        switch (format) {
        case "SVG":
            return `${countryName.toLowerCase()}.svg`;
        case "PNG":
            return `${size}.png`;
        }
    })();

    return basePath + filename;
}

export default getFlagPath;
