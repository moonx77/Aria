import { create } from 'zustand';

type ThemeStore = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const useTheme = create<ThemeStore>((set) => ({
  isDark: true,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));