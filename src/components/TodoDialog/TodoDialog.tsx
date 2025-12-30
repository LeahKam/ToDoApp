import type { Todo as TodoType } from '../../api/types'
import { TodosContent } from '../TodosContent/TodosContent'
import {
  DialogOverlay,
  DialogContainer,
  DialogHeader,
  DialogTitle,
  DialogCloseButton,
  DialogContent,
} from './styles'

interface TodoDialogProps {
  isOpen: boolean
  onClose: () => void
  userName: string
  todos: TodoType[]
  todosLoading: boolean
  todosError: Error | null
  hideCompleted: boolean
  onToggleFilter: () => void
  stats: {
    total: number
    completed: number
    pending: number
  }
}

export const TodoDialog = ({
  isOpen,
  onClose,
  userName,
  todos,
  todosLoading,
  todosError,
  hideCompleted,
  onToggleFilter,
  stats,
}: TodoDialogProps) => {
  if (!isOpen) return null

  return (
    <DialogOverlay onClick={onClose}>
      <DialogContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle>{userName}'s TODOs</DialogTitle>
          <DialogCloseButton onClick={onClose} aria-label="Close dialog">
            ×
          </DialogCloseButton>
        </DialogHeader>

        <DialogContent>
          <TodosContent
            todosLoading={todosLoading}
            todosError={todosError}
            todos={todos}
            hideCompleted={hideCompleted}
            onToggleFilter={onToggleFilter}
            stats={stats}
            emptyMessage="No TODOs found for this user"
          />
        </DialogContent>
      </DialogContainer>
    </DialogOverlay>
  )
}
