const getDomain = (url: string): string =>
    (new URL(url)).hostname;

export default getDomain;
