import { useState, useEffect } from 'react';
import { useModalStore } from '@/src/store/useModalStore';
import { useUsersStore } from '@/src/store/useUsersStore';
import { User } from '@/types/user';
import { Loader } from '@/src/components/loader/Loader';

export const UserModal = () => {
  const { 
    isUserModalOpen, 
    closeUserModal, 
    selectedUser, 
    isEditMode, 
    toggleEditMode, 
    isUserModalLoading, 
    setUserModalLoading,
    isDeleteConfirmOpen,
    openDeleteConfirm,
    closeDeleteConfirm
  } = useModalStore();
  
  const { updateUser, deleteUser } = useUsersStore();
  const [formData, setFormData] = useState<User | null>(null);

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    setUserModalLoading(true);
    try {
      // Update store first for immediate UI update
      updateUser(formData);
      
      // Then update the database
      const response = await fetch(`/api/users/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toggleEditMode();
      } else {
        // If API fails, we might want to revert the store update
        // This would require keeping the original user data
        console.error('Failed to update user in database');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      setUserModalLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedUser) return;
    
    setUserModalLoading(true);
    try {
      // Update store first for immediate UI update
      deleteUser(selectedUser.id);
      
      // Then update the database
      const response = await fetch(`/api/users/${selectedUser.id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        closeUserModal();
      } else {
        // If API fails, we might want to revert the store update
        console.error('Failed to delete user in database');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setUserModalLoading(false);
    }
  };

  if (!isUserModalOpen || !selectedUser || !formData) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {isEditMode ? 'Edit User' : 'User Details'}
            </h2>
            {!isEditMode && !isDeleteConfirmOpen && (
              <div className="flex gap-2">
                <button
                  onClick={toggleEditMode}
                  className="px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Edit
                </button>
                <button
                  onClick={openDeleteConfirm}
                  className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          {isDeleteConfirmOpen && !isEditMode && (
            <div className="mb-6 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400 mb-4">
                Are you sure you want to delete this user? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={closeDeleteConfirm}
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
                  disabled={isUserModalLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 disabled:opacity-50 flex items-center"
                  disabled={isUserModalLoading}
                >
                  {isUserModalLoading ? (
                    <>
                      <Loader size="sm" className="mr-2" />
                      Deleting...
                    </>
                  ) : (
                    'Confirm Delete'
                  )}
                </button>
              </div>
            </div>
          )}

          {isEditMode ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                    disabled={isUserModalLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                    disabled={isUserModalLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                    disabled={isUserModalLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                    disabled={isUserModalLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={formData.company.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company: { ...formData.company, name: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                    disabled={isUserModalLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                  <input
                    type="text"
                    value={formData.address.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: { ...formData.address, city: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                    disabled={isUserModalLoading}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={toggleEditMode}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
                  disabled={isUserModalLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 disabled:opacity-50 flex items-center"
                  disabled={isUserModalLoading}
                >
                  {isUserModalLoading ? (
                    <>
                      <Loader size="sm" className="mr-2" />
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="col-span-1 text-gray-500 dark:text-gray-400">Name</div>
                <div className="col-span-2 text-gray-900 dark:text-white font-medium">{formData.name}</div>

                <div className="col-span-1 text-gray-500 dark:text-gray-400">Username</div>
                <div className="col-span-2 text-gray-900 dark:text-white">{formData.username}</div>

                <div className="col-span-1 text-gray-500 dark:text-gray-400">Email</div>
                <div className="col-span-2 text-gray-900 dark:text-white">{formData.email}</div>

                <div className="col-span-1 text-gray-500 dark:text-gray-400">Phone</div>
                <div className="col-span-2 text-gray-900 dark:text-white">{formData.phone}</div>

                <div className="col-span-1 text-gray-500 dark:text-gray-400">Website</div>
                <div className="col-span-2 text-gray-900 dark:text-white">{formData.website}</div>

                <div className="col-span-1 text-gray-500 dark:text-gray-400">Company</div>
                <div className="col-span-2 text-gray-900 dark:text-white">{formData.company.name}</div>

                <div className="col-span-1 text-gray-500 dark:text-gray-400">Address</div>
                <div className="col-span-2 text-gray-900 dark:text-white">
                  {`${formData.address.street}, ${formData.address.suite}, ${formData.address.city}, ${formData.address.zipcode}`}
                </div>
              </div>

              {!isDeleteConfirmOpen && (
                <div className="flex justify-end pt-4">
                  <button
                    onClick={closeUserModal}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
