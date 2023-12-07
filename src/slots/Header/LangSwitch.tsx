import { Button } from 'antd';
import { Link, history, useAppData, useLocation, useSiteData } from 'dumi';
import { memo, useEffect, useState } from 'react';

import NativeSelect from '@/components/NativeSelect';
import { LOCALE_KEY } from '@/constants';
import { useSiteStore } from '@/store';

type ILocaleItem = ReturnType<typeof useSiteData>['locales'][0];

function getTargetLocalePath({
  pathname,
  current,
  target,
  base,
}: {
  base?: string;
  current: ILocaleItem;
  pathname: string;
  target: ILocaleItem;
}) {
  let modifyPathName = pathname;
  // fix locales with custom baseURL
  if (base && pathname.includes(base)) {
    modifyPathName = `/` + pathname.replace(base, '');
  }

  const clearPath =
    'base' in current
      ? // handle '/en-US/a' => '/a' or '/en-US' => '' => '/'
        modifyPathName.replace(current.base.replace(/\/$/, ''), '') || '/'
      : modifyPathName.replace(new RegExp(`${current.suffix}$`), '');

  return 'base' in target
    ? `${
        // for `/` base, strip duplicated leading slash
        target.base.replace(/\/$/, '')
      }${clearPath}`
        // for `/` clearPath, strip duplicated ending slash
        .replace(/([^/])\/$/, '$1')
    : `${clearPath}${target.suffix}`;
}

const languageMap: Record<string, string> = {
  'de-DE': '🇩🇪',
  'en-US': '🇺🇸',
  'es-ES': '🇪🇸',
  'fr-FR': '🇫🇷',
  'it-IT': '🇮🇹',
  'jp-JP': '🇯🇵',
  'ko-KR': '🇰🇷',
  'pt-BR': '🇧🇷',
  'ru-RU': '🇷🇺',
  'tr-TR': '🇹🇷',
  'vi-VN': '🇻🇳',
  'zh-CN': '🇨🇳',
};

const displayLangMap: Record<string, string> = {
  'en-US': 'EN',
  'jp-JP': 'JP',
  'ko-KR': 'KR',
  'tr-TR': 'TR',
  'zh-CN': 'CN',
};

const SingleSwitch = memo<{ current: ILocaleItem; locale: ILocaleItem }>(({ locale, current }) => {
  const appData = useAppData();
  const { pathname } = useLocation();
  const [path, setPath] = useState(() =>
    getTargetLocalePath({ base: appData.basename, current, pathname, target: locale }),
  );

  useEffect(() => {
    setPath(getTargetLocalePath({ base: appData.basename, current, pathname, target: locale }));
  }, [pathname, current.id, locale.id]);

  return (
    <Link to={path}>
      <Button
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          minWidth: 34,
          padding: 0,
        }}
      >
        {displayLangMap[locale.id]}
      </Button>
    </Link>
  );
});

const LangSwitch = memo(() => {
  const appData = useAppData();
  const current = useSiteStore((s) => s.locale);
  const locales = useSiteStore((s) => s.siteData.locales);

  // do not render in single language
  if (locales.length <= 1) return;

  return locales.length > 2 ? (
    <NativeSelect
      onChange={(index) => {
        console.log(
          'to path:',
          getTargetLocalePath({
            base: appData.basename,
            current,
            pathname: location.pathname,
            target: locales[index],
          }),
        );
        window.localStorage.setItem(LOCALE_KEY, JSON.stringify(locales[index]));
        history.push(
          getTargetLocalePath({
            base: appData.basename,
            current,
            pathname: location.pathname,
            target: locales[index],
          }),
        );
      }}
      options={locales.map((item) => ({
        label: displayLangMap[item.id],
        value: item.id,
      }))}
      renderItem={(item, index) => `${languageMap[locales[index].id]} ${locales[index].name}`}
      style={{
        alignItems: 'center',
        display: 'flex',
        height: 32,
        justifyContent: 'center',
        minWidth: 32,
        padding: 0,
      }}
      value={locales.findIndex((l) => l.id === current.id)}
    />
  ) : (
    // single language switch
    <SingleSwitch current={current} locale={locales.find(({ id }) => id !== current.id)!} />
  );
});

export default LangSwitch;
