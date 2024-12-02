import { useModalStore } from '@/src/store/useModalStore'
import { useUsersStore } from '@/src/store/useUsersStore'

export const UsersHeader = () => {
  const { filterQuery, setFilterQuery } = useUsersStore()
  const { openNewUserModal } = useModalStore()

  return (
    <div className="flex justify-between items-center gap-4 mb-6">
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search users..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <button
        onClick={openNewUserModal}
        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors flex items-center gap-2"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        Add New User
      </button>
    </div>
  )
}
