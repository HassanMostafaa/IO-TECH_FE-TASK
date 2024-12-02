import { create } from 'zustand';
import { User } from '@/types/user';

interface UsersStore {
  users: User[];
  isLoading: boolean;
  filterQuery: string;
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  updateUser: (updatedUser: User) => void;
  deleteUser: (userId: number) => void;
  setLoading: (loading: boolean) => void;
  setFilterQuery: (query: string) => void;
  filteredUsers: User[];
}

export const useUsersStore = create<UsersStore>((set, get) => ({
  users: [],
  isLoading: true,
  filterQuery: '',
  filteredUsers: [],
  setUsers: (users) => set((state) => {
    const query = state.filterQuery.toLowerCase()
    const filteredUsers = !query ? users : users.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    )
    return { users, filteredUsers }
  }),
  addUser: (newUser) => set((state) => {
    const newUsers = [...state.users, newUser]
    const query = state.filterQuery.toLowerCase()
    const filteredUsers = !query ? newUsers : newUsers.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    )
    return { users: newUsers, filteredUsers }
  }),
  updateUser: (updatedUser) => set((state) => {
    const newUsers = state.users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    )
    const query = state.filterQuery.toLowerCase()
    const filteredUsers = !query ? newUsers : newUsers.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    )
    return { users: newUsers, filteredUsers }
  }),
  deleteUser: (userId) => set((state) => {
    const newUsers = state.users.filter(user => user.id !== userId)
    const query = state.filterQuery.toLowerCase()
    const filteredUsers = !query ? newUsers : newUsers.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    )
    return { users: newUsers, filteredUsers }
  }),
  setLoading: (loading) => set({ isLoading: loading }),
  setFilterQuery: (query) => set((state) => {
    const newQuery = query.toLowerCase()
    const filteredUsers = !newQuery ? state.users : state.users.filter(user => 
      user.name.toLowerCase().includes(newQuery) ||
      user.email.toLowerCase().includes(newQuery) ||
      user.username.toLowerCase().includes(newQuery)
    )
    return { filterQuery: query, filteredUsers }
  }),
}));
