import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios'
import axios from 'axios'

import { PREF_KEYS } from '../constants/PreferenceKeys'
// import { SimpleEventEmitter } from './simple_event_emitter.service'

export interface IAPIResponse<T> {
  timestamp: string
  statusCode: number
  data: T
}

interface RequestOptions {
  pathParams?: Record<string, string | number>
  queryParams?: Record<string, string | number | boolean | null | undefined>
  data?: unknown
}

export function storeAccessToken(token: string) {
  const encryptedToken = btoa(token)
  localStorage.setItem(PREF_KEYS.accessToken, encryptedToken)
}

export function getAccessToken(): string | null {
  const token = localStorage.getItem(PREF_KEYS.accessToken)
  if (!token) return null
  return atob(token)
}

export function clearAccessToken() {
  localStorage.removeItem(PREF_KEYS.accessToken)
}

export class RequestCancelledError extends Error {
  constructor(message: string = 'Request was cancelled') {
    super(message)
    this.name = 'RequestCancelledError'
  }
}

export interface TokenGetter {
  getAccessToken: () => string | null
}

export class ApiService {
  private axiosInstance: AxiosInstance
  private cancelTokenSources: Map<string, CancelTokenSource> = new Map()
  // private eventEmitter: SimpleEventEmitter = new SimpleEventEmitter()
  private activeGetRequests: Map<string, CancelTokenSource> = new Map()
  private tokenGetter: TokenGetter

  constructor(baseURL: string, tokenGetter: TokenGetter) {
    this.axiosInstance = axios.create({ baseURL })
    this.tokenGetter = tokenGetter
    // this.setupCancellationListeners()
    this.setupInterceptors()
  }

  public cancelRequest(requestId: string): void {
    const source = this.cancelTokenSources.get(requestId)
    if (source) {
      source.cancel('Request cancelled by user')
      this.cancelTokenSources.delete(requestId)
    }
  }

  public cancelAllRequests(): void {
    this.cancelTokenSources.forEach((source) => {
      source.cancel('All requests cancelled by user')
    })
    this.cancelTokenSources.clear()
  }

  public async get(
    url: string,
    options: RequestOptions = {},
  ): Promise<AxiosResponse> {
    const preparedURL = prepareURL(url, options)
    this.cancelDuplicateGetRequests(preparedURL)
    return this.request({ method: 'GET', url: preparedURL })
  }

  public async post(
    url: string,
    options: RequestOptions = {},
  ): Promise<AxiosResponse> {
    const preparedURL = prepareURL(url, options)
    return this.request({
      method: 'POST',
      url: preparedURL,
      data: options.data,
    })
  }

  public async put(
    url: string,
    options: RequestOptions = {},
  ): Promise<AxiosResponse> {
    const preparedURL = prepareURL(url, options)
    return this.request({
      method: 'PUT',
      url: preparedURL,
      data: options.data,
    })
  }

  public async delete(
    url: string,
    options: RequestOptions = {},
  ): Promise<AxiosResponse> {
    const preparedURL = prepareURL(url, options)
    return this.request({ method: 'DELETE', url: preparedURL })
  }

  // New methods for emitting cancellation events
  // public emitCancelRequest(requestId: string): void {
  //   this.eventEmitter.emit('cancelRequest', requestId)
  // }

  // public emitCancelAllRequests(): void {
  //   this.eventEmitter.emit('cancelAllRequests')
  // }

  private async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    const requestId = config.url!
    const source = axios.CancelToken.source()
    this.cancelTokenSources.set(requestId, source)

    if (config.method?.toUpperCase() === 'GET') {
      this.activeGetRequests.set(requestId, source)
    }

    try {
      const response = await this.axiosInstance({
        ...config,
        cancelToken: source.token,
      })
      return response
    } catch (error) {
      if (axios.isCancel(error)) {
        throw new RequestCancelledError()
      }
      console.log('error :>> ', error)
      throw this.formatError(error)
    } finally {
      this.cancelTokenSources.delete(requestId)
      if (config.method?.toUpperCase() === 'GET') {
        this.activeGetRequests.delete(requestId)
      }
    }
  }

  // private setupCancellationListeners(): void {
  //   this.eventEmitter.on('cancelRequest', (requestId: string) => {
  //     this.cancelRequest(requestId)
  //   })

  //   this.eventEmitter.on('cancelAllRequests', () => {
  //     this.cancelAllRequests()
  //   })
  // }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use((config) => {
      const accessToken = this.tokenGetter.getAccessToken()

      config.headers.set('Authorization', `Bearer ${accessToken}`)
      config.headers.set('Content-Type', 'application/json')

      return config
    })

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        return Promise.reject(error)
      },
    )
  }

  private formatError(error: unknown): Error {
    const message =
      (error as { response: { data: { message: string } } })?.response?.data
        ?.message ||
      (error as { message: string })?.message ||
      'Unknown error'
    return new Error(`API Error: ${message}`)
  }

  private cancelDuplicateGetRequests(url: string): void {
    const existingSource = this.activeGetRequests.get(url)
    if (existingSource) {
      existingSource.cancel('Duplicate GET request cancelled')
      this.activeGetRequests.delete(url)
    }
  }
}

export function prepareURL(url: string, options: RequestOptions): string {
  let preparedURL = url

  // Process path parameters
  if (options.pathParams) {
    preparedURL = Object.entries(options.pathParams).reduce(
      (acc, [key, value]) => {
        return acc.replace(`:${key}`, encodeURIComponent(String(value)))
      },
      preparedURL,
    )
  }

  // Append query parameters
  if (options.queryParams) {
    const params: Record<string, string> = {}
    Object.entries(options.queryParams).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        params[key] = String(value)
      }
    })

    const queryString = new URLSearchParams(params).toString()
    preparedURL += (preparedURL.includes('?') ? '&' : '?') + queryString
  }

  return preparedURL
}

const API_URL = import.meta.env.VITE_API_BASE_URL
export default new ApiService(API_URL, {
  getAccessToken,
})
