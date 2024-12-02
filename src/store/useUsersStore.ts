import { create } from 'zustand';
import { User } from '@/types/user';

interface UsersStore {
  users: User[];
  isLoading: boolean;
  error: string | null;
  filterQuery: string;
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (userId: number) => void;
  setFilterQuery: (query: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  filteredUsers: User[];
}

export const useUsersStore = create<UsersStore>((set, get) => ({
  users: [],
  isLoading: true,
  error: null,
  filterQuery: '',
  setUsers: (users) => set({ users, error: null }),
  addUser: (user) => set((state) => ({ 
    users: [...state.users, user],
    error: null 
  })),
  updateUser: (user) => set((state) => ({
    users: state.users.map((u) => (u.id === user.id ? user : u)),
    error: null
  })),
  deleteUser: (userId) => set((state) => ({ 
    users: state.users.filter((u) => u.id !== userId),
    error: null
  })),
  setFilterQuery: (query) => set({ filterQuery: query }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  get filteredUsers() {
    const state = get()
    const query = state.filterQuery.toLowerCase()
    return query
      ? state.users.filter(
          (user) =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user?.company?.name.toLowerCase().includes(query)
        )
      : state.users
  },
}));
