import { useMemo, useEffect, useState, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { toggleHideCompleted } from '../../store/slices/uiSlice'
import { fetchUsers } from '../../api/users'
import { fetchTodosByUserId } from '../../api/todos'
import * as O from 'fp-ts/Option'
import * as E from 'fp-ts/Either'
import * as A from 'fp-ts/Array'
import * as R from 'fp-ts/Record'
import { pipe, identity } from 'fp-ts/function'
import type { Todo, User } from '../../api/types'
import { saveRouterState, toRouteState } from '../../utils/routerState'
import { calculateStats, type TodoStats } from '../../utils/todoStats'

export const useHome = () => {
  const dispatch = useAppDispatch()
  const selectedUserId = useAppSelector((state) => state.ui.selectedUserId)
  const hideCompleted = useAppSelector((state) => state.ui.hideCompleted)
  const completionOverrides = useAppSelector(
    (state) => state.ui.todoCompletionOverrides
  )

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const state = toRouteState(
      selectedUserId,
      hideCompleted,
      completionOverrides
    )
    saveRouterState(state)
  }, [selectedUserId, hideCompleted, completionOverrides])

  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await fetchUsers()()
      return pipe(
        result,
        E.fold(
          (error) => {
            throw new Error(error.message)
          },
          (users) => users
        )
      )
    },
  })

  const todosQuery = useQuery({
    queryKey: ['todos', O.toNullable(selectedUserId)],
    queryFn: async () => {
      const userId = O.toNullable(selectedUserId)
      if (userId === null) return []

      const result = await fetchTodosByUserId(userId)()
      return pipe(
        result,
        E.fold(
          (error) => {
            throw new Error(error.message)
          },
          (todos) => todos
        )
      )
    },
    enabled: O.isSome(selectedUserId),
  })

  const todosWithOverrides = useMemo(() => {
    if (!todosQuery.data) return []

    const applyOverride = (todo: Todo): Todo =>
      pipe(
        R.lookup(String(todo.id))(completionOverrides),
        O.fold(
          () => todo,
          (overrideValue) => ({ ...todo, completed: overrideValue })
        )
      )

    return pipe(todosQuery.data, A.map(applyOverride))
  }, [todosQuery.data, completionOverrides])

  const filteredTodos = useMemo(() => {
    const isNotCompleted = (todo: Todo) => !todo.completed

    return pipe(
      todosWithOverrides,
      hideCompleted ? A.filter(isNotCompleted) : identity
    )
  }, [todosWithOverrides, hideCompleted])

  const stats = useMemo(
    (): TodoStats => calculateStats(todosWithOverrides),
    [todosWithOverrides]
  )

  const handleToggleFilter = () => {
    dispatch(toggleHideCompleted())
  }

  const handleOpenDialog = useCallback(() => {
    setIsDialogOpen(true)
  }, [])

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false)
  }, [])

  const users = useMemo(
    () =>
      pipe(
        O.fromNullable(usersQuery.data),
        O.getOrElse((): User[] => [])
      ),
    [usersQuery.data]
  )

  const selectedUserName = useMemo(() => {
    const findUserName = (userId: number) =>
      pipe(
        O.fromNullable(usersQuery.data),
        O.chain((users) =>
          A.findFirst((user: User) => user.id === userId)(users)
        ),
        O.map((user) => user.name),
        O.getOrElse(() => '')
      )

    return pipe(
      selectedUserId,
      O.fold(() => '', findUserName)
    )
  }, [selectedUserId, usersQuery.data])

  return {
    users,
    usersLoading: usersQuery.isLoading,
    usersError: usersQuery.error,
    todos: filteredTodos,
    todosLoading: todosQuery.isLoading,
    todosError: todosQuery.error,
    selectedUserId,
    hideCompleted,
    handleToggleFilter,
    stats,
    isDialogOpen,
    handleOpenDialog,
    handleCloseDialog,
    selectedUserName,
  }
}
