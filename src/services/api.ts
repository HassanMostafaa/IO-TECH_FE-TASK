import axios from 'axios';
import { getBaseUrl } from '@/src/lib/utils/get-base-url';
import { User } from '@/types/user';

const api = {
  // Fetch all users
  getUsers: async (): Promise<User[]> => {
    try {
      const baseUrl = getBaseUrl();
      const { data } = await axios.get(`${baseUrl}/api/users`);
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Fetch a single user by ID
  getUser: async (id: number): Promise<User> => {
    try {
      const baseUrl = getBaseUrl();
      const { data } = await axios.get(`${baseUrl}/api/users/${id}`);
      return data;
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  },

  // Create a new user
  createUser: async (user: Omit<User, 'id'>): Promise<User> => {
    try {
      const baseUrl = getBaseUrl();
      const { data } = await axios.post(`${baseUrl}/api/users`, user);
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Update an existing user
  updateUser: async (id: number, user: Partial<User>): Promise<User> => {
    try {
      const baseUrl = getBaseUrl();
      const { data } = await axios.put(`${baseUrl}/api/users/${id}`, user);
      return data;
    } catch (error) {
      console.error(`Error updating user ${id}:`, error);
      throw error;
    }
  },

  // Delete a user
  deleteUser: async (id: number): Promise<void> => {
    try {
      const baseUrl = getBaseUrl();
      await axios.delete(`${baseUrl}/api/users/${id}`);
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error);
      throw error;
    }
  }
};

export { api };