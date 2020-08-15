import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'

import {
  MutationType,
  IRootState,
  ILocalesState,
  initialLocalesState
} from '@/models/store'

import { IAvailableLocaleInfo } from '@/models/localization/IAvailableLocaleInfo'
import { i18n } from '@/plugins/i18n-wrapper'

export const mutations: MutationTree<ILocalesState> = {
  selectLocale(state: ILocalesState, model: IAvailableLocaleInfo) {
    // set only the model selected to true
    state.availableLocales.forEach(item => {
      item.selected = item.locale === model.locale
      if (item.selected) {
        // switch i18n selected locale
        i18n.locale = item.locale
      }
    })
  }
}

export const actions: ActionTree<ILocalesState, IRootState> = {
  selectLocale({ commit }, localeInfo: IAvailableLocaleInfo) {
    commit(MutationType.locales.selectLocale, localeInfo)
  }
}

export const getters: GetterTree<ILocalesState, IRootState> = {}

const namespaced: boolean = true
const state: ILocalesState = initialLocalesState

export const localesState: Module<ILocalesState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
