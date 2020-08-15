import { IItem } from '@/models/items/IItem'

export interface IItemsState {
  loading: boolean
  items: IItem[]
  selectingItem: boolean
}

export const initialItemsState: IItemsState = {
  loading: false,
  items: [],
  selectingItem: false
}
