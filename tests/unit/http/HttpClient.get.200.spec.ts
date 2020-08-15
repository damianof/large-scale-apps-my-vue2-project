import { expect } from 'chai'
import sinon from 'sinon'
import axios, { AxiosRequestConfig } from 'axios'
import { httpClient, IHttpClientGetParameters } from '@/models/http/IHttpClient'
import { mockedPromiseFactory } from './IMockedPromiseFactory'

const mockParams: IHttpClientGetParameters = {
  url: 'path/to/a/get/api/endpoint',
  requiresToken: false
}

describe('HttpClient.get', () => {
  before(() => {
    const mockedRequestConfig = {
      headers: {}
    } as AxiosRequestConfig

    const mockedPromise = mockedPromiseFactory({
      url: mockParams.url,
      statusCode: 200,
      statusText: 'Success',
      requestConfig: mockedRequestConfig,
      data: 'get completed',
      reject: false
    })

    // since HttpClient uses axios internally, stub axios here
    sinon
      .stub(axios, 'get')
      .withArgs(mockParams.url, mockedRequestConfig)
      .returns(mockedPromise)
  })

  after(() => {
    sinon.restore()
  })

  it('should succeed and return data', done => {
    httpClient.get<string>(mockParams).then((response: any) => {
      //console.info('HttpClient get response', response)
      expect(response).to.equal('get completed')
      done()
    })
  })
})
