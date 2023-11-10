import { useResponsive } from 'antd-style';
import { useOutlet } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { Center } from 'react-layout-kit';

import { ApiHeader } from '@/components/ApiHeader';
import { useStyles } from '@/pages/Docs/styles';
import Content from '@/slots/Content';
import { useSiteStore } from '@/store';

const Changelog = memo(() => {
  const outlet = useOutlet();
  const { mobile } = useResponsive();

  const { fm } = useSiteStore(
    (s) => ({
      fm: s.routeMeta.frontmatter,
    }),
    isEqual,
  );

  const { styles } = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.background} />
      <Center
        className={styles.content}
        style={{
          padding: mobile ? 0 : 24,
        }}
      >
        <div style={{ padding: mobile ? 16 : 0, width: '100%' }}>
          <ApiHeader description={fm.description} title={fm.title} />
        </div>
        <Content className={styles.changelog}>{outlet}</Content>
      </Center>
    </>
  );
});

export default Changelog;
