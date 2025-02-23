import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUsersStore = create(
  persist(
    (set) => ({
      userToken: '',
      isAuthenticated: false,
      userId: '',
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
