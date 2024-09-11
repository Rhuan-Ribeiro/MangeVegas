import { createI18n } from "vue-i18n";
import PtBrTranslations from './pt_br.json';
import EnTranslations from './en.json';

export const i18nApplication = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: EnTranslations,
        br: PtBrTranslations,
        // es: EsTranslations,
    }
});