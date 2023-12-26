import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from '../package.json';
import { defineThemeConfig } from '../src/config';

const isWin = process.platform === 'win32';

const resources = {
  items: [
    {
      description: 'AIGC Components',
      openExternal: true,
      title: 'Lobe UI',
      url: 'https://github.com/lobehub/lobe-ui',
    },
    {
      description: 'Awesome lint configs',
      openExternal: true,
      title: 'xieyezi Lint',
      url: 'https://github.com/xieyezi/preset',
    },
    {
      description: 'xieyezi Dumi Theme',
      openExternal: true,
      title: 'Designed for Dumi 2',
      url: 'https://github.com/xieyezi/dumi-theme-xieyezi',
    },
  ],
  title: 'Resources',
};

const help = {
  items: [
    {
      description: 'Blog for xieyezi',
      openExternal: true,
      title: 'Blog',
      url: 'https://xieyezi.github.io',
    },
    {
      description: 'Report Bug',
      openExternal: true,
      title: 'xieyezi Dumi Theme',
      url: 'https://github.com/xieyezi/dumi-theme-xieyezi',
    },
  ],
  title: 'Help',
};

const more = {
  items: [
    {
      description: 'Github for xieyezi',
      openExternal: true,
      title: 'Github',
      url: 'https://github.com/xieyezi',
    },
  ],
  title: 'More',
};

const columns = [resources, help, more];

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
    'ja-JP': [
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
        link: '/components/example-kr',
        text: '시작하기',
        type: 'primary',
      },
    ],
    'th-TH': [
      {
        icon: 'Github',
        link: homepage,
        openExternal: true,
        text: 'Github',
      },
      {
        link: '/components/example-th',
        text: 'เริ่มต้นใช้งาน',
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
    'ja-JP': 'これはdumi-theme-xieyeziの例です',
    'ko-KR': '이것은 dumi-theme-xieyezi의 예입니다',
    'th-TH': 'นี่คือตัวอย่างสำหรับ dumi-theme-xieyezi',
    'zh-CN': '这是 dumi-theme-xieyezi 的示例',
  },
  docStyle: 'block',
  features: {},
  footer: 'made with by xieyezi',
  footerConfig: {
    columns,
  },
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOKq9K4M4CbNVp',
    repo: 'xieyezi/dumi-theme-xieyezi',
    repoId: 'R_kgDOKq9K4A',
  },
  logo: 'https://avatars.githubusercontent.com/u/16821989?v=4',
  nav: {
    'en-US': [
      { link: '/', title: 'Home' },
      { link: '/components/example', title: 'Components' },
      { link: '/changelog', title: 'Changelog' },
    ],
    'ja-JP': [
      { link: '/-jp', title: 'ホーム' },
      { link: '/components/example-jp', title: 'コンポーネント' },
      { link: '/changelog-jp', title: '更新履歴' },
    ],
    'ko-KR': [
      { link: '/-ko', title: '홈' },
      { link: '/components/example-kr', title: '구성 요소' },
      { link: '/changelog-kr', title: '변경 내역' },
    ],
    'th-TH': [
      { link: '/-th', title: 'หน้าแรก' },
      { link: '/components/example-th', title: 'ส่วนประกอบ' },
      { link: '/changelog-th', title: 'ประวัติการเปลี่ยนแปลง' },
    ],
    'zh-CN': [
      { link: '/-cn', title: '首页' },
      { link: '/components/example-cn', title: '组件' },
      { link: '/changelog-cn', title: '更新日志' },
    ],
  },
  simulatorUrl: 'http://127.0.0.1:5173/',
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
    { id: 'ja-JP', name: 'にほんご', suffix: '-jp' },
    { id: 'ko-KR', name: '한국어', suffix: '-kr' },
    { id: 'th-TH', name: 'ภาษาไทย', suffix: '-th' },
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
