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
      link: '/components/intro',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
    type: 'doc',
  },
  description: 'dfgdg building chatbot web apps',
  footer: 'made with by xieyezi',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOJloKoM4CXsCu',
    repo: 'lobehub/lobe-ui',
    repoId: 'R_kgDOJloKoA',
  },
  name: 'DUMI',
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
  ],

  metas: [
    {
      'content': 'IE=edge',
      'http-equiv': 'X-UA-Compatible',
    },
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
