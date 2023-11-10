import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import { SiteStore, initialState } from './initialState';

export const useSiteStore = createWithEqualityFn<SiteStore>()(
  devtools(() => initialState, { name: 'dumi-theme-xieyezi' }),
);

export * from './initialState';
