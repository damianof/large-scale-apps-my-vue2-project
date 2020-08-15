import { IAvailableLocaleInfo } from '@/models/localization/IAvailableLocaleInfo'

export interface ILocalesState {
  availableLocales: IAvailableLocaleInfo[]
}

export const initialLocalesState: ILocalesState = {
  availableLocales: [
    {
      name: 'USA',
      locale: 'en-US',
      flag: 'us',
      selected: false
    },
    {
      name: 'Italy',
      locale: 'it-IT',
      flag: 'it',
      selected: true // this is selected by default
    },
    {
      name: 'France',
      locale: 'fr-FR',
      flag: 'fr',
      selected: false
    },
    {
      name: 'Spain',
      locale: 'es-ES',
      flag: 'es',
      selected: false
    }
  ]
}
