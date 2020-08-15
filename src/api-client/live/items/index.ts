import {
  IItemsApiClientUrls,
  IItemsApiClient,
  ItemsApiClient
} from '@/models/api-client/items/IItemsApiClient'

const urls: IItemsApiClientUrls = {
  fetchItems: '/path/to/your/real/api/and-point'
}

const itemsApiClient: IItemsApiClient = new ItemsApiClient(urls)

export default itemsApiClient
