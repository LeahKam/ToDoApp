import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleTodoCompletion } from '../../store/slices/uiSlice'
import * as O from 'fp-ts/Option'
import * as R from 'fp-ts/Record'
import { pipe } from 'fp-ts/function'
import type { Todo as TodoType } from '../../api/types'

export const useTodo = (todo: TodoType) => {
  const dispatch = useAppDispatch()
  const completionOverrides = useAppSelector(
    (state) => state.ui.todoCompletionOverrides
  )

  const isCompleted = pipe(
    R.lookup(String(todo.id))(completionOverrides),
    O.getOrElse(() => todo.completed)
  )

  const handleToggle = useCallback(() => {
    dispatch(
      toggleTodoCompletion({
        todoId: todo.id,
        currentState: isCompleted,
      })
    )
  }, [dispatch, todo.id, isCompleted])

  return {
    isCompleted,
    handleToggle,
  }
}
