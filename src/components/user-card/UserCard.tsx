import React from 'react';
import { User } from '@/types/user';
import { useModalStore } from '@/src/store/useModalStore';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { openUserModal } = useModalStore();

  return (
    <div
      onClick={() => openUserModal(user)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 group hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 ease-out cursor-pointer relative before:absolute before:inset-0 before:rounded-lg before:transition-opacity before:opacity-0 hover:before:opacity-100 before:bg-gradient-to-r before:from-indigo-500/[0.03] before:via-purple-500/[0.03] before:to-pink-500/[0.03]"
    >
      <div className="flex items-start space-x-4 relative">
        <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 dark:bg-indigo-900/50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/70 transition-colors duration-300">
          <span className="text-xl font-medium text-indigo-600/90 dark:text-indigo-400/90 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            {user.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-indigo-600/90 dark:group-hover:text-indigo-400/90 transition-colors duration-300">
            {user.name}
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
            <svg className="h-4 w-4 group-hover:text-indigo-500/70 dark:group-hover:text-indigo-400/70 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
            <svg className="h-4 w-4 group-hover:text-indigo-500/70 dark:group-hover:text-indigo-400/70 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">{user.company.name}</span>
          </div>

        </div>
      </div>
    </div>
  );
};