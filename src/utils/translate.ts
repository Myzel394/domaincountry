const translate = (key: string, placeholders?: any[]): string =>
    extension.i18n.getMessage(key, placeholders);

export default translate;
