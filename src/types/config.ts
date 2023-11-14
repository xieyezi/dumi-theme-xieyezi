import type { FeaturesProps, FooterProps, HeroProps, LogoProps } from '@lobehub/ui';
import { FooterColumn } from 'rc-footer/es/column';

import type { NavData } from '@/store';
import type { SiteCustomToken } from '@/styles/customToken';

import type { HeroConfig } from './hero';

export type Intl =
  | 'en-US'
  | 'zh-CN'
  | 'de-DE'
  | 'es-ES'
  | 'fr-FR'
  | 'it-IT'
  | 'jp-JP'
  | 'ko-KR'
  | 'pt-BR'
  | 'ru-RU'
  | 'tr-TR'
  | 'vi-VN';

export interface ApiHeaderConfig {
  docUrl?: string | false;
  match?: string[];
  pkg?: string;
  services?: {
    'Anvaka Graph'?: boolean;
    'BundlePhobia'?: boolean;
    'NPM'?: boolean;
    'PackagePhobia'?: boolean;
    'UNPKG'?: boolean;
  };

  sourceUrl?: string | false;
  type?: 'component' | 'doc';
}

export interface FooterConfig {
  bottom?: FooterProps['bottom'];
  columns?: FooterProps['columns'];
  moreProducts?: FooterColumn;
  resources?: FooterColumn;
}

export interface SiteThemeConfig {
  actions: Partial<Record<string, HeroProps['actions']>>;
  apiHeader?: ApiHeaderConfig | false;
  description?: Partial<Record<Intl, string>>;
  docStyle?: 'block' | 'pure';
  features?: Partial<Record<Intl, FeaturesProps['items']>>;
  footer?: string | false;
  footerConfig?: FooterConfig;
  giscus?: {
    category: string;
    categoryId: string;
    repo: `${string}/${string}`;
    repoId: string;
  };
  hero?: HeroConfig | Record<string, HeroConfig>;
  logo?: string;
  logoType?: LogoProps['type'];
  name?: string;
  nav?: Partial<Record<Intl, NavData>>;
  simulator?: boolean;
  simulatorPath: string;
  simulatorUrl: string;
  siteToken?: SiteConfigToken;
  socialLinks?: {
    discord?: `https://discord.gg/${string}`;
    github?: string;
  };
  title?: string;
}

export type SiteConfigToken = Partial<
  Pick<
    SiteCustomToken,
    'headerHeight' | 'footerHeight' | 'sidebarWidth' | 'tocWidth' | 'contentMaxWidth'
  >
>;
