import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'
import {
  MutationType,
  IRootState,
  IItemsState,
  initialItemsState
} from '@/models/store'
import { IItem } from '@/models/items/IItem'
import apiClient from '@/api-client'

export const mutations: MutationTree<IItemsState> = {
  loadingItems(state: IItemsState) {
    state.loading = true
  },
  loadedItems(state: IItemsState, items: IItem[]) {
    state.items = items
    state.loading = false
  },
  selectingItem(state: IItemsState, isSelecting: boolean) {
    state.selectingItem = isSelecting
  }
}

export const actions: ActionTree<IItemsState, IRootState> = {
  loadItems({ commit }) {
    commit(MutationType.items.loadingItems)

    // let's pretend we called some API end-point
    // and it takes 1 second to return the data
    // by using javascript setTimeout with 1000 for the milliseconds option
    setTimeout(() => {
      apiClient.items.fetchItems().then(data => {
        commit(MutationType.items.loadedItems, data)
      })
    }, 1000)
  },
  selectingItem(
    { commit }: any,
    params: {
      id: number
      selected: boolean
    }
  ) {
    if (!state.selectingItem) {
      const { id, selected } = params
      commit(MutationType.items.selectingItem, true)

      const item = state.items.find(o => o.id === id)
      if (item) {
        item.selected = selected
        commit(MutationType.items.selectingItem, false)
      }
    }
  }
}

export const getters: GetterTree<IItemsState, IRootState> = {}

const namespaced: boolean = true
const state: IItemsState = initialItemsState

export const itemsState: Module<IItemsState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
