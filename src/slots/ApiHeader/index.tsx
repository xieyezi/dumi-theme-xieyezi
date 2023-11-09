import isEqual from 'fast-deep-equal';
import { memo, useMemo } from 'react';

import { ApiHeader as Header } from '@/components/ApiHeader';
import { apiHeaderSel, themeConfig, useSiteStore } from '@/store';

import BundlephobiaFilled from './BundlephobiaFilled';
import Graph from './Graph';
import NpmFilled from './NpmFilled';
import PackagePhobia from './PackagePhobia';
import Unpkg from './Unpkg';

const ApiHeader = memo(() => {
  const props = useSiteStore(apiHeaderSel, isEqual);
  const config = useSiteStore(themeConfig, isEqual);

  const { pkg } = props;

  const packages = useMemo(() => {
    const packageURL = encodeURIComponent(String(pkg));

    const allServeces = [
      {
        icon: <NpmFilled />,
        label: 'NPM',
        name: 'NPM',
        url: `https://www.npmjs.com/package/${packageURL}`,
      },
      {
        icon: <Unpkg />,
        label: 'Check package files',
        name: 'UNPKG',
        url: `https://unpkg.com/browse/${packageURL}/`,
      },
      {
        icon: <BundlephobiaFilled />,
        label: 'Check bundle size',
        name: 'BundlePhobia',
        url: `https://bundlephobia.com/package/${packageURL}`,
      },
      {
        icon: <PackagePhobia />,
        label: 'Check package size',
        name: 'PackagePhobia',
        url: `https://packagephobia.com/result?p=${packageURL}`,
      },

      {
        icon: <Graph />,
        label: 'Dependence graph',
        name: 'Anvaka Graph',
        url: `https://npm.anvaka.com/#/view/2d/${encodeURIComponent(packageURL)}`,
      },
    ];
    const aviableableServeces = allServeces.filter(
      (item) => Object.keys(config?.apiHeader?.services)?.includes(item.name),
    );

    return aviableableServeces;
  }, [pkg]);

  return <Header serviceList={packages} {...props} />;
});

export default ApiHeader;
