import { i18n } from '@/i18n';
const { t } = i18n.global;

export class I18nService {
  private static instance?: I18nService;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
    /// private constructor for singleton pattern
  }

  static get() {
    if (!this.instance) {
      this.instance = new I18nService();
    }
    return this.instance;
  }

  /**
   * Translation Method. Keep the name $t because of i18n-extract package.json script => the script base on name $t to perform i18n key searching.
   * @param key key of translation
   * @param params params to be interpolated
   * @returns
   */
  $t(key: string, params?: Record<string, unknown>): string {
    return t(key, params ? params : {});
  }
}
