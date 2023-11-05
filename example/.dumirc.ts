import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage } from '../package.json';

const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      icon: 'Github',
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/intro',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: false,
  description: 'dfgdg building chatbot web apps',
  docStyle: 'block',
  footer: 'made with by xieyezi',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOJloKoM4CXsCu',
    repo: 'lobehub/lobe-ui',
    repoId: 'R_kgDOJloKoA',
  },
  logo: 'https://avatars.githubusercontent.com/u/16821989?v=4',
  socialLinks: {
    github: homepage,
  },
  title: 'Dumi Theme xieyezi',
};

export default defineConfig({
  alias: {
    '@': resolve(__dirname, '../src'),
    'dumi-theme-xieyezi': resolve(__dirname, '../src'),
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  define: {
    'process.env': process.env,
  },
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '简体中文' },
    { id: 'tr-TR', name: '泰语' },
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  ssr: false,
  styles: [
    `html, body { background: transparent;  }
    @media (prefers-color-scheme: dark) {
      html, body { background: #000; }
    }`,
  ],
  themeConfig,
  title: 'Dumi Theme xieyezi',
});
