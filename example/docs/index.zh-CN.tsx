import { Features, FeaturesProps, Snippet, TabsNav } from '@lobehub/ui';
import { Moon, Palette, Smartphone, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description: '文档直观、可读性强，用户友好。',
    icon: Zap,
    title: '现代化',
  },
  {
    description: '对移动设备进行良好的适配。',
    icon: Smartphone,
    title: '移动设备适配',
  },
  {
    description: '自动识别暗黑模式，可以自动更改主题。',
    icon: Moon,
    title: '浅色和暗黑模式',
  },
  {
    description: '基于antd v5，可定制性更强。',
    icon: Palette,
    title: '可定制',
  },
];

export default () => {
  const [comannd, setCommand] = useState('$ npm install dumi-theme-xieyezi');

  const packageManagerOnchange = (activeKey: string) => {
    switch (activeKey) {
      case 'npm': {
        setCommand(`$ npm install dumi-theme-xieyezi`);
        break;
      }
      case 'yarn': {
        setCommand(`$ yarn add dumi-theme-xieyezi`);
        break;
      }
      case 'pnpm': {
        setCommand(`$ pnpm add dumi-theme-xieyezi`);
        break;
      }
      default: {
        break;
      }
    }
  };

  const packageManager = () => {
    return (
      <TabsNav
        items={[
          {
            key: 'npm',
            label: 'npm',
          },
          {
            key: 'yarn',
            label: 'yarn',
          },
          {
            key: 'pnpm',
            label: 'pnpm',
          },
        ]}
        onChange={packageManagerOnchange}
      />
    );
  };

  return (
    <Center gap={32}>
      <Center>
        <h2 style={{ fontSize: 20 }}>安装 dumi-theme-xieyezi，请运行以下命令：</h2>
        {packageManager()}
        <Snippet language="bash" style={{ marginTop: 10 }} type="block">
          {comannd}
        </Snippet>
      </Center>
      <Features columns={4} items={items} />
    </Center>
  );
};
