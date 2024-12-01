"use client";

import { useState } from "react";
import { User } from "@/types/user";
import { UsersFilter } from "./users-filter";
import { UsersTable } from "./users-table";

interface UsersContainerProps {
  initialUsers: User[];
}

function filterUsers(users: User[], searchQuery: string): User[] {
  const query = searchQuery.toLowerCase();
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
  );
}

function sortUsers(users: User[], sortBy: string): User[] {
  return [...users].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "id-asc":
        return a.id - b.id;
      case "id-desc":
        return b.id - a.id;
      default:
        return 0;
    }
  });
}

export function UsersContainer({ initialUsers }: UsersContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");

  const filteredUsers = filterUsers(initialUsers, searchQuery);
  const sortedUsers = sortUsers(filteredUsers, sortBy);

  return (
    <div className="space-y-4">
      <UsersFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <UsersTable initialUsers={sortedUsers} />
    </div>
  );
}
