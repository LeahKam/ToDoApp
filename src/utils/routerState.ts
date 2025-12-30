import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

export interface RouteState {
  selectedUserId: number | null
  hideCompleted: boolean
  todoCompletionOverrides: Record<string, boolean>
}

const STATE_KEY = 'todoapp-state'
const EMPTY_OVERRIDES: Record<string, boolean> = {}

export const saveRouterState = (state: RouteState): void => {
  try {
    sessionStorage.setItem(STATE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Failed to save state:', error)
  }
}

export const loadRouterState = (): O.Option<RouteState> =>
  O.tryCatch(() => {
    const saved = sessionStorage.getItem(STATE_KEY)
    if (!saved) throw new Error('No saved state')

    const parsed = JSON.parse(saved)

    const overrides = pipe(
      O.fromNullable(parsed.todoCompletionOverrides),
      O.getOrElse(() => EMPTY_OVERRIDES)
    )

    return {
      ...parsed,
      todoCompletionOverrides: Object.entries(overrides).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [String(key)]: value as boolean,
        }),
        EMPTY_OVERRIDES
      ),
    }
  })

export const toRouteState = (
  selectedUserId: O.Option<number>,
  hideCompleted: boolean,
  todoCompletionOverrides: Record<string, boolean>
): RouteState => ({
  selectedUserId: O.toNullable(selectedUserId),
  hideCompleted,
  todoCompletionOverrides,
})
