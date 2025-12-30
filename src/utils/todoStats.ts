import { Monoid } from 'fp-ts/Monoid'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import type { Todo } from '../api/types'

export interface TodoStats {
  total: number
  completed: number
  pending: number
}

export const todoStatsMonoid: Monoid<TodoStats> = {
  empty: { total: 0, completed: 0, pending: 0 },
  concat: (x, y) => ({
    total: x.total + y.total,
    completed: x.completed + y.completed,
    pending: x.pending + y.pending,
  }),
}

export const calculateStats = (todos: Todo[]): TodoStats => {
  const todoToStats = (todo: Todo): TodoStats => ({
    total: 1,
    completed: todo.completed ? 1 : 0,
    pending: todo.completed ? 0 : 1,
  })

  return pipe(todos, A.foldMap(todoStatsMonoid)(todoToStats))
}
