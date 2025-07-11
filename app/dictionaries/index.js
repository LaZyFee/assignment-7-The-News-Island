import "server-only";

const dictionaries = {
    en: () => import("./en.json").then((module) => module.default),
    bn: () => import("./bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
    const defaultLocale = "en";
    const selectedLocale = locale in dictionaries ? locale : defaultLocale;
    const dictionary = await dictionaries[selectedLocale]();
    return dictionary;
};