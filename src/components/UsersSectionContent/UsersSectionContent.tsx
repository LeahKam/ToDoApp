import type { User as UserType } from '../../api/types'
import { LoadingMessage } from '../LoadingMessage/LoadingMessage'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { EmptyState } from '../EmptyState/EmptyState'
import { UserList } from '../UserList/UserList'
import * as O from 'fp-ts/Option'

interface UsersSectionContentProps {
  usersLoading: boolean
  usersError: Error | null
  users: UserType[]
  onUserClick: O.Option<() => void>
}

export const UsersSectionContent = ({
  usersLoading,
  usersError,
  users,
  onUserClick,
}: UsersSectionContentProps) => {
  if (usersLoading) {
    return <LoadingMessage message="Loading users..." />
  }

  if (usersError) {
    return <ErrorMessage message={usersError.message} />
  }

  if (users.length === 0) {
    return <EmptyState message="No users found" />
  }

  return <UserList users={users} onUserClick={onUserClick} />
}
