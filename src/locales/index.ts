import I18n from 'i18n-js';

// Import all locales
import en from './en';
import ar from './ar';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {en, ar};

I18n.defaultLocale = 'en';

export function strings(name: any, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
