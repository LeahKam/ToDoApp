import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setSelectedUserId } from '../../store/slices/uiSlice'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'
import { Predicate } from 'fp-ts/Predicate'
import type { User } from '../../api/types'

const isUserSelected =
  (userId: number): Predicate<O.Option<number>> =>
  (selectedUserId) =>
    pipe(
      selectedUserId,
      O.exists((id) => id === userId)
    )

export const useUser = (user: User, onUserClick: O.Option<() => void>) => {
  const dispatch = useAppDispatch()
  const selectedUserId = useAppSelector((state) => state.ui.selectedUserId)

  const isSelected = isUserSelected(user.id)(selectedUserId)

  const handleShowTodos = useCallback(() => {
    dispatch(setSelectedUserId(user.id))
    pipe(
      onUserClick,
      O.map((callback) => callback())
    )
  }, [dispatch, user.id, onUserClick])

  return {
    isSelected,
    handleShowTodos,
  }
}
