import { useUsersStore } from '@/src/store/useUsersStore';
import { EmptyState } from '@/src/components/empty-state/EmptyState';
import { UsersGrid } from '@/src/components/users-grid/UsersGrid';
import { ErrorMessage } from '@/src/components/error-message/ErrorMessage';
import { Loader } from '@/src/components/loader/Loader';

export const UsersContent = () => {
  const { users, filterQuery, isLoading, error } = useUsersStore();
  
  // Apply filtering
  const displayUsers = filterQuery
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(filterQuery.toLowerCase()) ||
          user?.company?.name.toLowerCase().includes(filterQuery.toLowerCase())
      )
    : users.filter(user => user.website !== null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px] p-4">
        <div className="max-w-md w-full">
          <ErrorMessage 
            message={error}
            className="mb-4"
          />
          <button
            onClick={() => window.location.reload()}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!isLoading && displayUsers.length === 0) {
    return (
      <EmptyState 
        filterQuery={filterQuery}
        message={filterQuery ? "No users match your search" : "No users found"} 
      />
    );
  }

  return <UsersGrid users={displayUsers} />;
};
