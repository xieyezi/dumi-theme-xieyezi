import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from '../package.json';
import { defineThemeConfig } from '../src/config';

const isWin = process.platform === 'win32';

const themeConfig = defineThemeConfig({
  actions: {
    'en-US': [
      {
        icon: 'Github',
        link: homepage,
        openExternal: true,
        text: 'Github',
      },
      {
        link: '/components/example',
        text: 'Get Started',
        type: 'primary',
      },
    ],
    'jp-JP': [
      {
        icon: 'Github',
        link: homepage,
        openExternal: true,
        text: 'Github',
      },
      {
        link: '/components/example-jp',
        text: 'はじめる',
        type: 'primary',
      },
    ],
    'ko-KR': [
      {
        icon: 'Github',
        link: homepage,
        openExternal: true,
        text: 'Github',
      },
      {
        link: '/components/example-ko',
        text: '시작하기',
        type: 'primary',
      },
    ],
    'tr-TR': [
      {
        icon: 'Github',
        link: homepage,
        openExternal: true,
        text: 'Github',
      },
      {
        link: '/components/example-tr',
        text: 'Başla',
        type: 'primary',
      },
    ],
    'zh-CN': [
      {
        icon: 'Github',
        link: homepage,
        openExternal: true,
        text: 'Github',
      },
      {
        link: '/components/example-cn',
        text: '开始使用',
        type: 'primary',
      },
    ],
  },
  apiHeader: {
    match: ['/components'],
    pkg: name,
    services: {
      NPM: true,
      UNPKG: true,
    },
  },
  description: {
    'en-US': 'this is example for dume-theme-xieyezi',
    'jp-JP': 'これはdumi-theme-xieyeziの例です',
    'ko-KR': '이것은 dumi-theme-xieyezi의 예입니다',
    'tr-TR': 'Bu dumi-theme-xieyezi için bir örnektir',
    'zh-CN': '这是 dumi-theme-xieyezi 的示例',
  },
  docStyle: 'block',
  features: {},
  footer: 'made with by xieyezi',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOJloKoM4CXsCu',
    repo: 'lobehub/lobe-ui',
    repoId: 'R_kgDOJloKoA',
  },
  logo: 'https://avatars.githubusercontent.com/u/16821989?v=4',
  nav: {
    'en-US': [
      { link: '/', title: 'Home' },
      { link: '/components/example', title: 'Components' },
      { link: '/changelog', title: 'Changelog' },
    ],
    'jp-JP': [
      { link: '/-jp', title: 'ホーム' },
      { link: '/components/example-jp', title: 'コンポーネント' },
      { link: '/changelog-jp', title: '更新履歴' },
    ],
    'ko-KR': [
      { link: '/-ko', title: '홈' },
      { link: '/components/example-ko', title: '구성 요소' },
      { link: '/changelog-ko', title: '변경 내역' },
    ],
    'tr-TR': [
      { link: '/-tr', title: 'Anasayfa' },
      { link: '/components/example-tr', title: 'Bileşenler' },
      { link: '/changelog-tr', title: 'Değişiklikler' },
    ],
    'zh-CN': [
      { link: '/-cn', title: '首页' },
      { link: '/components/example-cn', title: '组件' },
      { link: '/changelog-cn', title: '更新日志' },
    ],
  },
  simulator: true,
  simulatorPath: '',
  simulatorUrl: 'http://localhost:19006',
  socialLinks: {
    github: homepage,
  },
  title: 'dumi-theme-xieyezi',
});

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
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '简体中文', suffix: '-cn' },
    { id: 'jp-JP', name: 'にほんご', suffix: '-jp' },
    { id: 'ko-KR', name: '한국어', suffix: '-kr' },
    { id: 'tr-TR', name: 'ภาษาไทย', suffix: '-tr' },
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
