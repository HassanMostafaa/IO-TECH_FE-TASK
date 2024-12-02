'use client'

import { useEffect } from 'react'
import { NewUserModal } from '@/src/components/new-user-modal/NewUserModal'
import { UserModal } from '@/src/components/user-modal/UserModal'
import { UsersHeader } from '@/src/components/users-header/UsersHeader'
import { Loading } from '@/src/components/loading/Loading'
import { UsersContent } from '@/src/components/users-content/UsersContent'
import { useUsersStore } from '@/src/store/useUsersStore'

export default function HomePage() {
  const { setUsers, setLoading, isLoading, filterQuery, filteredUsers } = useUsersStore()

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <UsersHeader />
      <UsersContent users={filteredUsers} filterQuery={filterQuery} />
      <NewUserModal />
      <UserModal />
    </main>
  )
}
