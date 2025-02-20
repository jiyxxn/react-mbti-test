import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUsersStore = create(
  persist(
    (set) => ({
      userToken: '',
      isAuthenticated: false,
      userLogin: (token) => set({ userToken: token, isAuthenticated: true }),
      userLogout: () => set({ userToken: '', isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', // localStorage에 저장될 key
      storage: createJSONStorage(() => localStorage), // JSON 변환을 포함한 저장 방식 사용
    }
  )
);

export default useUsersStore;
