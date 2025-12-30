import * as O from 'fp-ts/Option'
import type { Todo as TodoType } from '../../api/types'
import { EmptyState } from '../EmptyState/EmptyState'
import { TodosContent } from '../TodosContent/TodosContent'

interface TodosSectionContentProps {
  selectedUserId: O.Option<number>
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
}

export const TodosSectionContent = ({
  selectedUserId,
  todosLoading,
  todosError,
  todos,
  hideCompleted,
  onToggleFilter,
  stats,
}: TodosSectionContentProps) => {
  if (O.isNone(selectedUserId)) {
    return <EmptyState message="Select a user to view their todo items" />
  }

  return (
    <TodosContent
      todosLoading={todosLoading}
      todosError={todosError}
      todos={todos}
      hideCompleted={hideCompleted}
      onToggleFilter={onToggleFilter}
      stats={stats}
      emptyMessage="No todos found"
    />
  )
}
