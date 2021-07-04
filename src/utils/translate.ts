const translate = (key: string, placeholders?: any[]): string =>
    browser.i18n.getMessage(key, placeholders);

export default translate;
