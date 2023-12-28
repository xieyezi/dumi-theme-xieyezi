import { Giscus } from '@lobehub/ui';
import { useResponsive, useTheme } from 'antd-style';
import { useLocation, useOutlet } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useCallback, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import ApiHeader from '@/slots/ApiHeader';
import Content from '@/slots/Content';
import Simulator from '@/slots/Simulator';
import { giscusSel, isApiPageSel, themeConfig, useSiteStore } from '@/store';

import { useStyles } from './styles';

const Documents = memo(() => {
  const outlet = useOutlet();
  const theme = useTheme();
  const location = useLocation();
  const { mobile } = useResponsive();

  const config = useSiteStore(themeConfig, isEqual);
  const { isApiPage, giscus } = useSiteStore(
    (st) => ({ giscus: giscusSel(st), isApiPage: isApiPageSel(st) }),
    shallow,
  );
  const { styles } = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [location.pathname]);

  const Gradient = () => <div className={styles.background} />;

  const Comment = useCallback(
    () =>
      giscus && (
        <div style={{ marginTop: 64 }}>
          <Giscus
            category={giscus.category}
            categoryId={giscus.categoryId}
            id="lobehub"
            mapping="title"
            repo={giscus.repo}
            repoId={giscus.repoId}
          />
        </div>
      ),
    [giscus, location.pathname],
  );

  const Doc = () => {
    return (
      <div
        className={styles.content}
        style={{
          marginBottom: 48,
          marginLeft: mobile ? 0 : 48,
          padding: mobile ? 0 : theme.docPadding,
        }}
      >
        {isApiPage ? (
          <div style={{ padding: mobile ? theme.mobilePadding : 0, width: '100%' }}>
            <ApiHeader />
          </div>
        ) : undefined}
        <Content>
          {outlet}
          {giscus && <Comment />}
        </Content>
      </div>
    );
  };

  return (
    <div>
      <Gradient />
      <Doc />
      {!mobile && <Simulator path={location.pathname} src={config.simulatorUrl} />}
    </div>
  );
});

export default Documents;
