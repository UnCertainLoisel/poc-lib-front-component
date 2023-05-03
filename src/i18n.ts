import { createI18n } from 'vue-i18n';
import * as i18nfrmessages from '@/assets/i18n/i18n.fr.json';

const messages = {
  'fr': {
    ...i18nfrmessages,
  },
};
const i18n = createI18n({
  locale: 'fr',
  messages,
  globalInjection: true,
});
export { i18n };
