import { create } from 'zustand'

interface UserState {
  isLogedIn: boolean;
  setIsLogedIn: (val: boolean) => void;
  isLoginSkipped: boolean;
  setIsLoginSkipped: (val: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLogedIn: false,
  setIsLogedIn: (val) => set(() => ({isLogedIn: val})),
  isLoginSkipped: false,
  setIsLoginSkipped: (val) => set(() => ({isLoginSkipped: val}))
}));
