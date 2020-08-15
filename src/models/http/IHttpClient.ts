import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

/**
 * @description
 * Interface for our HttpClient wrapper
 */
export interface IHttpClient {
  get<T>(parameters: IHttpClientGetParameters): Promise<T>
  post<T>(parameters: IHttpClientPostParameters): Promise<T>
}

/**
 * HttpClient parameters for "get" operations
 */
export interface IHttpClientGetParameters {
  url: string
  requiresToken: boolean
}

/**
 * HttpClient parameters for "post" operations
 */
export interface IHttpClientPostParameters {
  url: string
  payload: any
  requiresToken: boolean
}

/**
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package like axios
 * and simplify replacement in the future if such npm package would stop being developed or other reasons
 */
export class HttpClient implements IHttpClient {
  private getToken(): string {
    const TOKEN_KEY =
      process.env && process.env.VUE_APP_TOKEN_KEY
        ? process.env.VUE_APP_TOKEN_KEY
        : 'myapp-token'
    const token = localStorage.getItem(TOKEN_KEY) || ''
    return token
  }

  constructor() {
    // // Add a request interceptor
    // axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // 	// Do something before request is sent
    // 	console.log('interceptor request config', config)
    // 	return config
    // }, (error: any) => {
    // 	// Do something with request error
    // 	console.log('interceptor request error', error)
    // 	return Promise.reject(error)
    // })
    // // Add a response interceptor
    // axios.interceptors.response.use((response: any) => {
    // 	// Any status code that lie within the range of 2xx cause this function to trigger
    // 	// Do something with response data
    // 	console.log('interceptor response', response)
    // 	return response
    // }, (error: AxiosError) => {
    // 	if (error) {
    // 		const response: AxiosResponse = error && error.response ? error.response : {
    // 			data: undefined,
    // 			status: -1,
    // 			statusText: '',
    // 			headers: [],
    // 			config: {}
    // 		}
    // 		console.log('interceptor response status', response.status)
    // 		console.log('interceptor response error', error)
    // 	}
    // 	// Any status codes that falls outside the range of 2xx cause this function to trigger
    // 	// Do something with response error
    // 	return Promise.reject(error)
    // })
  }

  get<T>(parameters: IHttpClientGetParameters): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters

      // axios options
      const options: AxiosRequestConfig = {
        headers: {}
      }

      if (requiresToken) {
        const token = this.getToken()
        options.headers.RequestVerificationToken = token
      }

      axios
        .get(url, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          console.info('------ rejecting ----')
          reject(response)
        })
    })
  }

  post<T>(parameters: IHttpClientPostParameters): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, payload, requiresToken } = parameters

      // axios options
      const options: AxiosRequestConfig = {
        headers: {}
      }

      if (requiresToken) {
        const token = this.getToken()
        options.headers.RequestVerificationToken = token
      }

      axios
        .post(url, payload, options)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          reject(response)
        })
    })
  }
}

export const httpClient = new HttpClient()
