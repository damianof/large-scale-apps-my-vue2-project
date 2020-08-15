import Vuex from 'vuex'
import {
  // GEN-IMPORTS
  ILocalesState,
  initialLocalesState,
  IItemsState,
  initialItemsState
} from '@/models/store/'

export interface IStoreModuleNames {
  readonly localesState: string
  readonly itemsState: string
}
export const StoreModuleNames: IStoreModuleNames = Object.freeze({
  localesState: 'localesState',
  itemsState: 'itemsState'
})

export interface IRootState {
  loading: boolean
}

export const initialRootState: IRootState = {
  loading: false
}

export interface IRootStore {
  // GEN-INTERFACE-PROPS
  localesState: ILocalesState
  itemsState: IItemsState
}

export class RootStore<S> extends Vuex.Store<S> implements IRootStore {
  // GEN-STORE-PROPS
  localesState: ILocalesState = initialLocalesState
  itemsState: IItemsState = initialItemsState
}
