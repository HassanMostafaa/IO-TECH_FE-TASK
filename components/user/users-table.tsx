"use client";

import { User } from "@/types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UsersFilter } from "./users-filter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUsersStore } from "@/src/store/useUsersStore";

interface UsersTableProps {
  initialUsers: User[];
}

export function UsersTable({ initialUsers }: UsersTableProps) {
  const {
    users,
    setUsers,
    getFilteredAndSortedUsers,
    filterQuery,
    sortBy,
    setFilterQuery,
    setSortBy,
    isLoading,
  } = useUsersStore();

  // Local state to force re-renders on filter/sort changes
  const [, setUpdateTrigger] = useState(0);

  useEffect(() => {
    // Only set initial users once when the component mounts
    if (users=== null && initialUsers?.length > 0) {
      setUsers(initialUsers);
    }
  }, [initialUsers, setUsers, users]);

  // Force re-render when filter or sort changes
  useEffect(() => {
    setUpdateTrigger((prev) => prev + 1);
  }, [filterQuery, sortBy]);

  if (isLoading) {
    return (
      <div className="w-full space-y-4">
        <div className="flex items-center space-x-4 animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
        </div>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-full h-12 bg-gray-100 rounded animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (!users?.length) {
    return <div>No users found</div>;
  }

  const displayUsers = getFilteredAndSortedUsers();

  return (
    <div className="space-y-8">
      <div className="absolute -translate-y-5 pr-4">
        <UsersFilter
          searchQuery={filterQuery}
          onSearchChange={setFilterQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell"></TableHead>
              <TableHead className="hidden sm:table-cell">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="w-0 p-0 pl-4 hidden sm:table-cell">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <UserIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell font-medium pl-2">
                  {user.name}
                </TableCell>
                <TableCell className="">{user.email}</TableCell>
                <TableCell className="text-right">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={`/user/${user.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>User Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
