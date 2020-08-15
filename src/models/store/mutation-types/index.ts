import {
  ILocalesMutationType,
  LocalesMutationType
} from './ILocalesMutationType'
import { IItemsMutationType, ItemsMutationType } from './IItemsMutationType'

export interface IMutationType {
  readonly locales: ILocalesMutationType
  readonly items: IItemsMutationType
  // as you add new state modules, add reference to module-specific mutation types here
}

export const MutationType: IMutationType = Object.freeze({
  locales: LocalesMutationType,
  items: ItemsMutationType
  // as you add new state modules, add reference to module-specific mutation types here
})
