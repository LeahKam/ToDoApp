import type { User as UserType } from '../../api/types'
import { User } from '../User/User'
import { Grid } from './styles'
import * as O from 'fp-ts/Option'

interface UserListProps {
  users: UserType[]
  onUserClick: O.Option<() => void>
}

export const UserList = ({ users, onUserClick }: UserListProps) => {
  return (
    <Grid>
      {users.map((user) => (
        <User key={user.id} user={user} onUserClick={onUserClick} />
      ))}
    </Grid>
  )
}
