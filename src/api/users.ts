import axios from 'axios'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import type { User, ApiError } from './types'
import { API_CONFIG } from '../config/api'
import { buildUrl, handleAxiosError } from '../utils/apiUtils'

export const fetchUsers = (): TE.TaskEither<ApiError, User[]> =>
  pipe(
    TE.tryCatch(
      () =>
        axios.get<User[]>(
          buildUrl(API_CONFIG.BASE_URL, API_CONFIG.ENDPOINTS.USERS)
        ),
      handleAxiosError
    ),
    TE.map((response) => response.data)
  )

export const fetchUserById = (userId: number): TE.TaskEither<ApiError, User> =>
  pipe(
    TE.tryCatch(
      () =>
        axios.get<User>(
          buildUrl(
            API_CONFIG.BASE_URL,
            `${API_CONFIG.ENDPOINTS.USERS}/${userId}`
          )
        ),
      handleAxiosError
    ),
    TE.map((response) => response.data)
  )
