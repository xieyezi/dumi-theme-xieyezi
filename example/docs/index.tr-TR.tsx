import { Features, FeaturesProps, Snippet, TabsNav } from '@lobehub/ui';
import { Moon, Palette, Smartphone, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description: 'เอกสารที่ใช้งานง่ายและอ่านง่ายกว่า มีอินเตอร์เฟซที่เข้าใจง่ายสำหรับผู้ใช้',
    icon: Zap,
    title: 'ทันสมัย',
  },
  {
    description: 'เข้ากันได้ดีกับอุปกรณ์เคลื่อนที่',
    icon: Smartphone,
    title: 'การเข้ากันได้กับอุปกรณ์เคลื่อนที่',
  },
  {
    description: 'ตรวจจับโหมดมืดโดยอัตโนมัติและสามารถเปลี่ยนธีมตามได้',
    icon: Moon,
    title: 'โหมดสว่างและโหมดมืด',
  },
  {
    description: 'พัฒนาขึ้นบน Ant Design v5 ที่ให้ความสามารถในการปรับแต่งเพิ่มเติม',
    icon: Palette,
    title: 'สามารถปรับแต่งได้',
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
          ในการติดตั้ง dumi-theme-xieyezi โปรดเรียกใช้คำสั่งต่อไปนี้:
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
