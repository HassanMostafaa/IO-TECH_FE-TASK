import { create } from 'zustand';
import { User } from '@/types/user';

interface ModalStore {
  // New User Modal
  isNewUserModalOpen: boolean;
  isNewUserLoading: boolean;
  openNewUserModal: () => void;
  closeNewUserModal: () => void;
  setNewUserLoading: (loading: boolean) => void;

  // User Modal
  isUserModalOpen: boolean;
  isUserModalLoading: boolean;
  isDeleteConfirmOpen: boolean;
  selectedUser: User | null;
  isEditMode: boolean;
  openUserModal: (user: User) => void;
  closeUserModal: () => void;
  toggleEditMode: () => void;
  setUserModalLoading: (loading: boolean) => void;
  openDeleteConfirm: () => void;
  closeDeleteConfirm: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  // New User Modal
  isNewUserModalOpen: false,
  isNewUserLoading: false,
  openNewUserModal: () => set({ isNewUserModalOpen: true }),
  closeNewUserModal: () => set({ isNewUserModalOpen: false, isNewUserLoading: false }),
  setNewUserLoading: (loading) => set({ isNewUserLoading: loading }),

  // User Modal
  isUserModalOpen: false,
  isUserModalLoading: false,
  isDeleteConfirmOpen: false,
  selectedUser: null,
  isEditMode: false,
  openUserModal: (user) => set({ isUserModalOpen: true, selectedUser: user, isEditMode: false, isDeleteConfirmOpen: false }),
  closeUserModal: () => set({ isUserModalOpen: false, selectedUser: null, isEditMode: false, isUserModalLoading: false, isDeleteConfirmOpen: false }),
  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
  setUserModalLoading: (loading) => set({ isUserModalLoading: loading }),
  openDeleteConfirm: () => set({ isDeleteConfirmOpen: true }),
  closeDeleteConfirm: () => set({ isDeleteConfirmOpen: false }),
}));
