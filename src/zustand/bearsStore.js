import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const initialUserState = {
  userToken: '',
  isAuthenticated: false,
  userId: '',
};

const useUsersStore = create(
  persist(
    (set) => ({
      ...initialUserState,
      userLogin: (token, userId) =>
        set({
          userToken: token,
          isAuthenticated: true,
          userId: userId,
        }),
      userLogout: () =>
        set({ userToken: '', isAuthenticated: false, userId: '' }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUsersStore;
