import {
  IItemsApiClientUrls,
  IItemsApiClient,
  ItemsApiClient
} from '@/models/api-client/items/IItemsApiClient'

const urls: IItemsApiClientUrls = {
  fetchItems: '/static/data/items.json'
}

const itemsApiClient: IItemsApiClient = new ItemsApiClient(urls)

export default itemsApiClient
