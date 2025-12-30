import axios, { AxiosError } from 'axios'
import * as O from 'fp-ts/Option'
import * as R from 'fp-ts/Record'
import { pipe, flow } from 'fp-ts/function'
import type { ApiError } from '../api/types'

const toQueryString = (params: Record<string, string | number>): string =>
  pipe(params, R.toEntries, (entries) => {
    const searchParams = new URLSearchParams()
    entries.forEach(([key, value]) => searchParams.append(key, String(value)))
    return searchParams.toString()
  })

const appendQueryString =
  (url: string) =>
  (queryString: string): string =>
    `${url}?${queryString}`

export const buildUrl = (
  baseUrl: string,
  path: string,
  queryParams?: Record<string, string | number>
): string => {
  const baseWithPath = `${baseUrl}${path}`

  return pipe(
    O.fromNullable(queryParams),
    O.filter((params) => R.size(params) > 0),
    O.map(flow(toQueryString, appendQueryString(baseWithPath))),
    O.getOrElse(() => baseWithPath)
  )
}

const extractAxiosError = (error: AxiosError): ApiError => ({
  message: error.message || 'An error occurred',
  status: pipe(O.fromNullable(error.response?.status), O.toUndefined),
})

const extractGenericError = (error: Error): ApiError => ({
  message: error.message,
  status: undefined,
})

export const handleAxiosError = (error: unknown): ApiError =>
  pipe(
    O.fromPredicate((e: unknown): e is AxiosError => axios.isAxiosError(e))(
      error
    ),
    O.fold(
      () =>
        error instanceof Error
          ? extractGenericError(error)
          : { message: 'Unknown error', status: undefined },
      extractAxiosError
    )
  )
