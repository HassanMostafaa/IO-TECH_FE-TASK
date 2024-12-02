'use client'

import { useEffect, useState } from 'react'
import { NewUserModal } from '@/src/components/new-user-modal/NewUserModal'
import { UserModal } from '@/src/components/user-modal/UserModal'
import { UsersHeader } from '@/src/components/users-header/UsersHeader'
import { UsersContent } from '@/src/components/users-content/UsersContent'
import { useUsersStore } from '@/src/store/useUsersStore'
import { api } from '@/src/services/api'

export default function HomePage() {
  const { setUsers, setLoading, setError } = useUsersStore()
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      if (initialLoad) {
        setLoading(true)
        setInitialLoad(false)
      }
      try {
        const users = await api.getUsers()
        setUsers(users)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load users')
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [setUsers, setLoading, setError, initialLoad])

  return (
    <main className="container mx-auto px-4 py-8">
      <UsersHeader />
      <UsersContent />
      <NewUserModal />
      <UserModal />
    </main>
  )
}
