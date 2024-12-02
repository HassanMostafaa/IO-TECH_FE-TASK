import { User } from '@/types/user'
import { EmptyState } from '../empty-state/EmptyState'
import { UsersGrid } from '../users-grid/UsersGrid'

interface UsersContentProps {
  users: User[]
  filterQuery: string
}

export const UsersContent = ({ users, filterQuery }: UsersContentProps) => {
  return users.length === 0 ? (
    <EmptyState filterQuery={filterQuery} />
  ) : (
    <UsersGrid users={users} />
  )
}
