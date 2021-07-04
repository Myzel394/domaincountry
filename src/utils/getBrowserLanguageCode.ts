const getBrowserLanguageCode = (): string =>
    browser.i18n
        .getUILanguage()
        .split("-")[0];

export default getBrowserLanguageCode;
