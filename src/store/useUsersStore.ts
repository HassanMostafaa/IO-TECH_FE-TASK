import { create } from 'zustand';
import { User } from '@/types/user';

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
        return a.name.localeCompare(b.name); // Default to name-asc
    }
  });
}

interface UsersStore {
  users: User[] | null;
  isLoading: boolean;
  error: string | null;
  filterQuery: string;
  sortBy: string;
  setUsers: (users: User[]) => void;
  currentUser: User | null;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (userId: number) => void;
  setFilterQuery: (query: string) => void;
  setSortBy: (sortBy: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  getFilteredAndSortedUsers: () => User[];
  setCurrentUser: (user: User | null) => void
}

export const useUsersStore = create<UsersStore>((set, get) => ({
  users: null,
  isLoading: true,
  error: null,
  filterQuery: '',
  sortBy: 'name-asc',
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
  setUsers: (users) => set({ users, error: null, isLoading: false }),

  addUser: (user) => set((state) => ({ 
    users: [...(state.users ?? []), user],
    error: null ,
    currentUser: user
  })),

  updateUser: (user) => set((state) => ({
    currentUser: user,
    users: (state.users || []).map((u) => (u.id === user.id ? user : u)),
    error: null
  })),

  deleteUser: (userId) => set((state) => ({ 
    users: (state.users || []).filter((u) => u.id !== userId),
    error: null,
    currentUser: null
  })),

  setFilterQuery: (query) => set({ filterQuery: query }),
  setSortBy: (sortBy) => set({ sortBy }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  getFilteredAndSortedUsers: () => {
    const { users, filterQuery, sortBy } = get();
    const filtered = filterUsers(users || [], filterQuery);
    return sortUsers(filtered, sortBy);
  },
}));
