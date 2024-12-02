import React from 'react';
import { useModalStore } from '@/src/store/useModalStore';
import { UserCard } from '../user-card/UserCard';
import { User } from '@/types/user';

interface UsersGridProps {
  users: User[];
}

export const UsersGrid = ({ users }: UsersGridProps) => {
  const { openUserModal } = useModalStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {users.map((user) => (
        <div key={user.id} onClick={() => openUserModal(user)} className="cursor-pointer">
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};