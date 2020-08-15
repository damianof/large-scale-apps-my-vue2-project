import { expect } from 'chai'
import sinon from 'sinon'
import axios, { AxiosRequestConfig } from 'axios'
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
      statusCode: 400,
      statusText: 'Error',
      requestConfig: mockedRequestConfig,
      data: 'post completed with errors',
      reject: true
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

  it('should reject and return 400', done => {
    httpClient
      .post<string>(mockParams)
      .then((response: any) => {
        // should not get in here
      })
      .catch((response: any) => {
        expect(response.status).to.equal(400)
        done()
      })
  })
})
