import { expect } from 'chai'
import sinon from 'sinon'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  httpClient,
  IHttpClientPostParameters
} from '@/models/http/IHttpClient'
import { mockedPromiseFactory } from './IMockedPromiseFactory'

const mockParams: IHttpClientPostParameters = {
  url: 'path/to/a/get/api/endpoint',
  payload: {
    someValue: 'some-value'
  },
  requiresToken: false
}

describe('HttpClient.post', () => {
  before(() => {
    const mockedRequestConfig = {
      headers: {}
    } as AxiosRequestConfig

    const mockedPromise = mockedPromiseFactory({
      url: mockParams.url,
      statusCode: 200,
      statusText: 'Success',
      requestConfig: mockedRequestConfig,
      data: 'post completed',
      reject: false
    })

    // since HttpClient uses axios internally, stub axios here
    sinon
      .stub(axios, 'post')
      .withArgs(mockParams.url, mockParams.payload, mockedRequestConfig)
      .returns(mockedPromise)
  })

  after(() => {
    sinon.restore()
  })

  it('should return data', done => {
    httpClient.post<string>(mockParams).then((response: any) => {
      //console.info('HttpClient post response', response)
      expect(response).to.equal('post completed')
      done()
    })
  })
})
