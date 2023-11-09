import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from '../package.json';

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
      link: '/guide/intro',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    match: ['/components'],
    pkg: name,
    services: {
      NPM: true,
      UNPKG: true,
    },
  },
  description: 'this is example for dume-theme-xieyezi',
  docStyle: 'block',
  footer: 'made with by xieyezi',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOJloKoM4CXsCu',
    repo: 'lobehub/lobe-ui',
    repoId: 'R_kgDOJloKoA',
  },
  logo: 'https://avatars.githubusercontent.com/u/16821989?v=4',
  nav: [
    { link: '/guide/intro', title: 'Guide' },
    { link: '/components/button', title: 'Components' },
    { link: '/changelog', title: 'Changelog' },
  ],
  simulator: true,
  simulatorUrl: 'http://localhost:19006',
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
    { id: 'jp-JP', name: 'にほんご' },
    { id: 'ko-KR', name: '한국어' },
    { id: 'tr-TR', name: 'ภาษาไทย' },
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
