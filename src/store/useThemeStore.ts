import type { ThemeMode } from 'antd-style';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { THEME_KEY } from '@/constants';

export interface ThemeStore {
  themeMode: ThemeMode;
}
export const useThemeStore = create<ThemeStore>()(
  persist(
    () => ({
      themeMode: 'auto' as ThemeMode,
    }),
    { name: THEME_KEY },
  ),
);
