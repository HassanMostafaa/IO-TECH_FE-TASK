import React from 'react';
import { Button } from '@/components/ui/button';
import { UserX } from 'lucide-react';
import Link from 'next/link';

export function NoUsersFound() {

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-100 rounded-lg">
      <UserX className="h-16 w-16 text-gray-400" />
      <p className="text-xl font-semibold text-gray-500">No users found</p>
      <Link href={'/register'}>
        <Button variant="default" className="mt-4">
        Register a new user now
        </Button>
      </Link>
    </div>
  );
}
