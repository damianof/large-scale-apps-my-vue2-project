import { IItem } from '@/models/items/IItem'
import { httpClient, IHttpClientGetParameters } from '@/models/http/IHttpClient'

export interface IItemsApiClientUrls {
  fetchItems: string
}

export interface IItemsApiClient {
  fetchItems: () => Promise<IItem[]>
}

export class ItemsApiClient implements IItemsApiClient {
  private readonly urls!: IItemsApiClientUrls

  constructor(urls: IItemsApiClientUrls) {
    this.urls = urls
  }

  fetchItems(): Promise<IItem[]> {
    const getParameters: IHttpClientGetParameters = {
      url: this.urls.fetchItems,
      requiresToken: false
    }

    return httpClient.get<IItem[]>(getParameters)
  }
}
