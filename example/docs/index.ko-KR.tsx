import { Features, FeaturesProps, Snippet, TabsNav } from '@lobehub/ui';
import { Moon, Palette, Smartphone, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description: '직관적이고 읽기 쉬운 사용자 친화적인 문서입니다.',
    icon: Zap,
    title: '현대적',
  },
  {
    description: '모바일 기기에 잘 적응됩니다.',
    icon: Smartphone,
    title: '모바일 기기 호환성',
  },
  {
    description: '다크 모드를 자동으로 감지하고 테마를 변경할 수 있습니다.',
    icon: Moon,
    title: '라이트 모드와 다크 모드',
  },
  {
    description: 'Ant Design v5 기반으로 제작되어 더 많은 커스터마이징 옵션을 제공합니다.',
    icon: Palette,
    title: '커스터마이즈 가능',
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
        <h2 style={{ fontSize: 20 }}>dumi-theme-xieyezi를 설치하려면 다음 명령을 실행하세요:</h2>
        {packageManager()}
        <Snippet language="bash" style={{ marginTop: 10 }} type="block">
          {comannd}
        </Snippet>
      </Center>
      <Features columns={4} items={items} />
    </Center>
  );
};
