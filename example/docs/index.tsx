import { Features, FeaturesProps, Snippet, TabsNav } from '@lobehub/ui';
import { Moon, Palette, Smartphone, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description: 'Intuitive and readable documentation with user-friendly interface.',
    icon: Zap,
    title: 'Modern',
  },
  {
    description: 'Well-adapted for mobile devices.',
    icon: Smartphone,
    title: 'Mobile Device Compatibility',
  },
  {
    description: 'Automatically detects dark mode and can change themes accordingly.',
    icon: Moon,
    title: 'Light and Dark Mode',
  },
  {
    description: 'Built on Ant Design v5, providing more customization options.',
    icon: Palette,
    title: 'Customizable',
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
        <h2 style={{ fontSize: 20 }}>To install dumi-theme-xieyezi, run the following command:</h2>
        {packageManager()}
        <Snippet language="bash" style={{ marginTop: 10 }} type="block">
          {comannd}
        </Snippet>
      </Center>
      <Features columns={4} items={items} />
    </Center>
  );
};
