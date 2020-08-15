export interface ILocalesMutationType {
  readonly selectLocale: string
}

export const LocalesMutationType: ILocalesMutationType = Object.freeze({
  selectLocale: 'selectLocale'
})
