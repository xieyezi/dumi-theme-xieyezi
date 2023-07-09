import { useOutlet } from 'dumi';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import Features from '@/slots/Features';
import Hero from '@/slots/Hero';

const Home = memo(() => {
  const outlet = useOutlet();

  return (
    <Flexbox align={'center'} gap={64} style={{ minHeight: '64vh', padding: '64px 24px' }}>
      <Hero />
      <Features />
      {outlet}
    </Flexbox>
  );
});

export default Home;
