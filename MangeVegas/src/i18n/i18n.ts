import { createI18n } from "vue-i18n";
import PtBrTranslations from './pt_br.json';
import EnTranslations from './en.json';
import EsTranslations from './es.json';
import DeTranslations from './de.json';

export type AvailableLanguages = 
    'en' | 'br' | 'es' | 'de';

export const i18nApplication = createI18n({
    legacy: false,
    locale: 'br',
    messages: {
        en: EnTranslations,
        br: PtBrTranslations,
        es: EsTranslations,
        de: DeTranslations,
    }
});

export const changeLanguage = (locale: AvailableLanguages)=>{
    i18nApplication.global.locale.value = locale;
}