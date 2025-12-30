import axios from 'axios'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import type { Todo, ApiError } from './types'
import { API_CONFIG } from '../config/api'
import { buildUrl, handleAxiosError } from '../utils/apiUtils'

export const fetchTodos = (): TE.TaskEither<ApiError, Todo[]> =>
  pipe(
    TE.tryCatch(
      () =>
        axios.get<Todo[]>(
          buildUrl(API_CONFIG.BASE_URL, API_CONFIG.ENDPOINTS.TODOS)
        ),
      handleAxiosError
    ),
    TE.map((response) => response.data)
  )

export const fetchTodosByUserId = (
  userId: number
): TE.TaskEither<ApiError, Todo[]> =>
  pipe(
    TE.tryCatch(
      () =>
        axios.get<Todo[]>(
          buildUrl(API_CONFIG.BASE_URL, API_CONFIG.ENDPOINTS.TODOS, { userId })
        ),
      handleAxiosError
    ),
    TE.map((response) => response.data)
  )
