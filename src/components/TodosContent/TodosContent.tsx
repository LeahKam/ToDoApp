import type { Todo as TodoType } from '../../api/types'
import { LoadingMessage } from '../LoadingMessage/LoadingMessage'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { EmptyState } from '../EmptyState/EmptyState'
import { TodoStats } from '../TodoStats/TodoStats'
import { TodoFilter } from '../TodoFilter/TodoFilter'
import { TodoList } from '../TodoList/TodoList'

interface TodosContentProps {
  todosLoading: boolean
  todosError: Error | null
  todos: TodoType[]
  hideCompleted: boolean
  onToggleFilter: () => void
  stats: {
    total: number
    completed: number
    pending: number
  }
  emptyMessage?: string
}

export const TodosContent = ({
  todosLoading,
  todosError,
  todos,
  hideCompleted,
  onToggleFilter,
  stats,
  emptyMessage = 'No TODOs found',
}: TodosContentProps) => {
  if (todosLoading) {
    return <LoadingMessage message="Loading TODOs..." />
  }

  if (todosError) {
    return <ErrorMessage message={todosError.message} />
  }

  if (todos.length === 0 && hideCompleted && stats.total > 0) {
    return <EmptyState message="All todos are completed!" />
  }

  if (todos.length === 0) {
    return <EmptyState message={emptyMessage} />
  }

  return (
    <>
      <TodoStats
        total={stats.total}
        completed={stats.completed}
        pending={stats.pending}
      />
      <TodoFilter checked={hideCompleted} onChange={onToggleFilter} />
      <TodoList todos={todos} />
    </>
  )
}
