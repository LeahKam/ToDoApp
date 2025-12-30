import type { User as UserType } from '../../api/types'
import { useUser } from './useUser'
import { UserCard, UserName, UserUsername, ShowTodosButton } from './styles'
import * as O from 'fp-ts/Option'

export interface UserProps {
  user: UserType
  onUserClick: O.Option<() => void>
}

export const User = ({ user, onUserClick }: UserProps) => {
  const { isSelected, handleShowTodos } = useUser(user, onUserClick)

  return (
    <UserCard $selected={isSelected}>
      <UserName>{user.name}</UserName>
      <UserUsername>@{user.username}</UserUsername>
      <ShowTodosButton $selected={isSelected} onClick={handleShowTodos}>
        {isSelected ? 'Showing TODOs' : 'Show TODOs'}
      </ShowTodosButton>
    </UserCard>
  )
}
