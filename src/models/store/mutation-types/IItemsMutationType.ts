export interface IItemsMutationType {
  readonly loadItems: string
  readonly loadingItems: string
  readonly loadedItems: string
  readonly selectingItem: string
}

export const ItemsMutationType: IItemsMutationType = Object.freeze({
  loadItems: 'loadItems',
  loadingItems: 'loadingItems',
  loadedItems: 'loadedItems',
  selectingItem: 'selectingItem'
})
