import { Hero as H } from '@lobehub/ui';
import { useIntl } from 'dumi';
import { memo, useMemo } from 'react';

import { heroActionsSel, heroDescSel, heroTitleSel, useSiteStore } from '@/store';

const Hero = memo(() => {
  const intl = useIntl();
  const title = useSiteStore(heroTitleSel);
  const description = useSiteStore(heroDescSel);
  const actions = useSiteStore(heroActionsSel);

  const actionsIntl = useMemo(() => {
    // eslint-disable-next-line array-callback-return
    return actions?.map((action: any) => {
      if (action.text === 'Get Started') {
        return {
          ...action,
          text:
            intl.locale === 'en-US'
              ? 'Get Started'
              : intl.locale === 'zh-CN'
              ? '开始使用'
              : intl.locale === 'ko-KR'
              ? '시작하기'
              : intl.locale === 'jp-JP'
              ? 'はじめる'
              : intl.locale === 'tr-TR'
              ? 'Başla'
              : 'Get Started',
        };
      }

      return action;
    });
  }, [actions]);

  return <H actions={actionsIntl} description={description} title={title!} />;
});

export default Hero;
