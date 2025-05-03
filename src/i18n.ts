import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import Typograf from 'typograf';

const tp = new Typograf({
    locale: ['ru', 'en-US'],
    enableRule: [
        'common/space/afterPunctuation',
        'common/space/nbspAfterPreposition',
        'common/quote/frenchGuillemets',
        'common/number/delimiter',
    ],
});

function processTranslations(translations: Record<string, any>, language: string): Record<string, any> {
    const processedTranslations: Record<string, any> = {};

    for (const key in translations) {
        if (typeof translations[key] === 'string') {
            processedTranslations[key] = tp.execute(translations[key], { locale: language });
        } else if (typeof translations[key] === 'object' && translations[key] !== null) {
            processedTranslations[key] = processTranslations(translations[key], language);
        } else {
            processedTranslations[key] = translations[key];
        }
    }

    return processedTranslations;
}

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: processTranslations(en, 'en-US') },
        ru: { translation: processTranslations(ru, 'ru') },
    },
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;