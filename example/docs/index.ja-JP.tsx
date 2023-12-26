import { Features, FeaturesProps, Snippet, TabsNav } from '@lobehub/ui';
import { Moon, Palette, Smartphone, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description: '直感的で読みやすく、ユーザーフレンドリーなドキュメンテーション。',
    icon: Zap,
    title: 'モダン',
  },
  {
    description: 'モバイルデバイスに適応されています。',
    icon: Smartphone,
    title: 'モバイルデバイス対応',
  },
  {
    description: 'ダークモードを自動的に検出し、テーマを変更できます。',
    icon: Moon,
    title: 'ライトモードとダークモード',
  },
  {
    description: 'Ant Design v5をベースにしており、よりカスタマイズ可能です。',
    icon: Palette,
    title: 'カスタマイズ可能',
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
        <h2 style={{ fontSize: 20 }}>
          dumi-theme-xieyeziをインストールするには、次のコマンドを実行してください：
        </h2>
        {packageManager()}
        <Snippet language="bash" style={{ marginTop: 10 }} type="block">
          {comannd}
        </Snippet>
      </Center>
      <Features columns={4} items={items} />
    </Center>
  );
};
