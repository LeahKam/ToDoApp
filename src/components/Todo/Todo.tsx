import type { Todo as TodoType } from '../../api/types'
import { useTodo } from './useTodo'
import { TodoContainer, Checkbox, TodoTitle } from './styles'

export interface TodoProps {
  todo: TodoType
}

export const Todo = ({ todo }: TodoProps) => {
  const { isCompleted, handleToggle } = useTodo(todo)

  return (
    <TodoContainer>
      <Checkbox checked={isCompleted} onChange={handleToggle} />
      <TodoTitle $completed={isCompleted}>{todo.title}</TodoTitle>
    </TodoContainer>
  )
}
