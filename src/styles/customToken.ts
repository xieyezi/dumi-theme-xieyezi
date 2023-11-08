import { GetCustomToken } from 'antd-style';

export interface SiteCustomToken {
  contentMaxWidth: number;
  docBorderRadius: number;
  docHeaderTopHeight: number;
  docNavWidth: number;
  docPadding: number;
  docRowMaxWidth: number;
  docSimulatorHeight: number;
  docSimulatorWidth: number;
  headerHeight: number;
  sidebarPadding: number;
  sidebarWidth: number;
}

const generateCustomToken: GetCustomToken<SiteCustomToken> = () => ({
  contentMaxWidth: 960,
  docBorderRadius: 20,
  docHeaderTopHeight: 64,
  docNavWidth: 220,
  docPadding: 24,
  docRowMaxWidth: 1680,
  docSimulatorHeight: 620,
  docSimulatorWidth: 360,
  headerHeight: 64,
  sidebarPadding: 16,
  sidebarWidth: 374,
});

export default generateCustomToken;
