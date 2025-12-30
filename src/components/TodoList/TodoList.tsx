import type { Todo as TodoType } from '../../api/types'
import { Todo } from '../Todo/Todo'
import { List } from './styles'

interface TodoListProps {
  todos: TodoType[]
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  )
}
