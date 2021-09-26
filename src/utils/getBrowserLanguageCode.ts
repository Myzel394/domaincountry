const getBrowserLanguageCode = (): string =>
    extension.i18n
        .getUILanguage()
        .split("-")[0];

export default getBrowserLanguageCode;
