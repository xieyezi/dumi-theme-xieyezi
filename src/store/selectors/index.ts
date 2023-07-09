import { ISidebarItem } from 'dumi/dist/client/theme-api/types';

import { AnchorItem } from '../../types';
import { SiteStore } from '../useSiteStore';

export * from './apiHeader';
export * from './hero';
export * from './siteBasicInfo';
export * from './token';

export const activePathSel = (s: SiteStore) => {
  if (s.location.pathname === '/') return '/';

  const item = s.navData
    .filter((index) => index.link !== '/')
    .find((index) => s.location.pathname.startsWith(String(index.activePath! || index.link)));

  return item?.activePath || item?.link || '';
};

/**
 * toc 锚点选择器
 * @param s
 */
export const tocAnchorItemSel = (s: SiteStore) => {
  let { toc, frontmatter } = s.routeMeta;

  if (s.tabMeta?.toc) toc = s.tabMeta.toc;

  if (s.tabMeta?.frontmatter) frontmatter = s.tabMeta.frontmatter as any;

  const shouldKeepWith = (depth: number) => {
    if (!frontmatter.tocDepth) return true;

    if (typeof frontmatter.tocDepth === 'number' && frontmatter.tocDepth > depth - 1) return true;
  };

  return toc.reduce<AnchorItem[]>((result, item) => {
    if (item.depth === 2 && shouldKeepWith(2)) {
      result.push({ ...item });
    } else if (item.depth === 3 && shouldKeepWith(3)) {
      const parent = result.at(-1);

      if (parent) {
        parent.children = parent.children || [];
        parent.children.push({ ...item });
      }
    }

    return result;
  }, []);
};

/**
 * 将 sidebar 信息扁平化
 * @param s
 */
export const flattenSidebarSel = (s: SiteStore): ISidebarItem[] => {
  return s.sidebar?.map((index) => index.children).flat() || [];
};

export const contentBottomSel = (s: SiteStore) => {
  const dataFlatten = flattenSidebarSel(s);
  const path = s.location.pathname;
  const currentIndex = dataFlatten.findIndex((item) => item.link === path);

  return { currentIndex, next: dataFlatten[currentIndex + 1], prev: dataFlatten[currentIndex - 1] };
};
