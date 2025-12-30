import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as O from 'fp-ts/Option'
import { Eq } from 'fp-ts/Eq'
import * as N from 'fp-ts/number'

export interface UIState {
  selectedUserId: O.Option<number>
  hideCompleted: boolean
  todoCompletionOverrides: Record<string, boolean>
}

const initialState: UIState = {
  selectedUserId: O.none,
  hideCompleted: false,
  todoCompletionOverrides: {},
}

const eqOptionNumber: Eq<O.Option<number>> = O.getEq(N.Eq)

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedUserId: (state, action: PayloadAction<number | null>) => {
      const newUserId = O.fromNullable(action.payload)

      if (!eqOptionNumber.equals(state.selectedUserId, newUserId)) {
        state.hideCompleted = false
        state.todoCompletionOverrides = {}
      }

      state.selectedUserId = newUserId
    },
    toggleHideCompleted: (state) => {
      state.hideCompleted = !state.hideCompleted
    },
    toggleTodoCompletion: (
      state,
      action: PayloadAction<{ todoId: number; currentState: boolean }>
    ) => {
      const { todoId, currentState } = action.payload
      state.todoCompletionOverrides[String(todoId)] = !currentState
    },
  },
})

export const { setSelectedUserId, toggleHideCompleted, toggleTodoCompletion } =
  uiSlice.actions
export default uiSlice.reducer
