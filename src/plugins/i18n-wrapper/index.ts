import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'it-IT',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': {
      welcome: 'Welcome: this message is localized for English'
    },
    'it-IT': {
      welcome: 'Benvenuti: this message is localized for Italian'
    },
    'fr-FR': {
      welcome: 'Bienvenue: this message is localized for French'
    },
    'es-ES': {
      welcome: 'Bienvenido: this message is localized for Spanish'
    }
  }
})
