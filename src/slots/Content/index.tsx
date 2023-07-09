import { Skeleton, Typography } from 'antd';
import { useResponsive } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import ContentFooter from '@/slots/ContentFooter';
import { useSiteStore } from '@/store';
import { DivProps } from '@/types';

import { useStyles } from './style';

const Content = memo<DivProps>(({ children, ...props }) => {
  const loading = useSiteStore((s) => s.siteData.loading);

  const { styles, cx } = useStyles();
  const { mobile } = useResponsive();

  return (
    <Flexbox gap={mobile ? 0 : 24} width={'100%'} {...props}>
      <Typography />
      <div className={cx('dumi-antd-style-content', styles.content)}>
        <Skeleton active loading={loading} paragraph />
        <div
          style={{
            display: loading ? 'none' : undefined,
          }}
        >
          {children}
        </div>
      </div>
      <ContentFooter />
    </Flexbox>
  );
});

export default Content;
