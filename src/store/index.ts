import { configureStore } from '@reduxjs/toolkit'
import uiReducer, { type UIState } from './slices/uiSlice'
import { loadRouterState } from '../utils/routerState'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

const loadPersistedState = (): { ui: UIState } | undefined =>
  pipe(
    loadRouterState(),
    O.map((persistedState) => ({
      ui: {
        selectedUserId: O.fromNullable(persistedState.selectedUserId),
        hideCompleted: persistedState.hideCompleted,
        todoCompletionOverrides: persistedState.todoCompletionOverrides,
      },
    })),
    O.toUndefined
  )

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState: loadPersistedState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
