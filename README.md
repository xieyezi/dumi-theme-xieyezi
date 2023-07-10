<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://npm.elemecdn.com/@lobehub/assets-logo@1.0.0/assets/logo-3d.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png">

<h1>Dumi Theme Lobehub</h1>

dumi-theme-lobehub is a documentation site theme package designed for `Dumi 2`. <br/>It provides a more beautiful and user-friendly development and reading experience based on `@lobehub/ui`

[Changelog](./CHANGELOG.md) · [Report Bug][issues-url] · [Request Feature][issues-url]

<!-- SHIELD GROUP -->

[![release][release-shield]][release-url]
[![releaseDate][release-date-shield]][release-date-url]
[![ciTest][ci-test-shield]][ci-test-url]
[![ciRelease][ci-release-shield]][ci-release-url] <br/>
[![contributors][contributors-shield]][contributors-url]
[![forks][forks-shield]][forks-url]
[![stargazers][stargazers-shield]][stargazers-url]
[![issues][issues-shield]][issues-url]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)

####

</details>

## 📦 Installation

```bash
pnpm add dumi-theme-antd-style -D
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Gitpod for online development:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][gitpod-url]

Or clone it for local development:

```bash
$ git clone https://github.com/lobehub/dumi-theme-lobehub.git
$ cd dumi-theme-lobehub
$ pnpm install
$ pnpm start
```

Theme Config:

```ts
interface SiteThemeConfig {
  actions: HeroProps['actions'];
  apiHeader?: ApiHeaderConfig | false;
  description?: string;
  features: FeaturesProps['items'];
  footer?: string | false;
  footerConfig?: FooterConfig;
  giscus?: {
    category: string;
    categoryId: string;
    repo: `${string}/${string}`;
    repoId: string;
  };
  hero?: HeroConfig | Record<string, HeroConfig>;
  hideHomeNav?: boolean;
  logo?: string;
  name?: string;
  siteToken?: SiteConfigToken;
  socialLinks?: {
    discord?: `https://discord.gg/${string}`;
    github?: string;
  };
  title?: string;
}
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

<!-- CONTRIBUTION GROUP -->

> 📊 Total: <kbd>**1**</kbd>

<a href="https://github.com/canisminor1990" title="canisminor1990">
  <img src="https://avatars.githubusercontent.com/u/17870709?v=4" width="50" />
</a>

<!-- CONTRIBUTION END -->

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023 [LobeHub][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[profile-url]: https://github.com/lobehub
[gitpod-url]: https://gitpod.io/#https://github.com/lobehub/dumi-theme-lobehub

<!-- SHIELD LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

<!-- release -->

[release-shield]: https://img.shields.io/npm/v/dumi-theme-lobehub?label=%F0%9F%A4%AF%20NPM
[release-url]: https://www.npmjs.com/package/dumi-theme-lobehub

<!-- releaseDate -->

[release-date-shield]: https://img.shields.io/github/release-date/lobehub/dumi-theme-lobehub?style=flat
[release-date-url]: https://github.com/lobehub/dumi-theme-lobehub/releases

<!-- ciTest -->

[ci-test-shield]: https://github.com/lobehub/dumi-theme-lobehub/workflows/Test%20CI/badge.svg
[ci-test-url]: https://github.com/lobehub/dumi-theme-lobehub/actions?query=workflow%3ATest%20CI

<!-- ciRelease -->

[ci-release-shield]: https://github.com/lobehub/dumi-theme-lobehub/workflows/Release%20CI/badge.svg
[ci-release-url]: https://github.com/lobehub/dumi-theme-lobehub/actions?query=workflow%3ARelease%20CI

<!-- contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/lobehub/dumi-theme-lobehub.svg?style=flat
[contributors-url]: https://github.com/lobehub/dumi-theme-lobehub/graphs/contributors

<!-- forks -->

[forks-shield]: https://img.shields.io/github/forks/lobehub/dumi-theme-lobehub.svg?style=flat
[forks-url]: https://github.com/lobehub/dumi-theme-lobehub/network/members

<!-- stargazers -->

[stargazers-shield]: https://img.shields.io/github/stars/lobehub/dumi-theme-lobehub.svg?style=flat
[stargazers-url]: https://github.com/lobehub/dumi-theme-lobehub/stargazers

<!-- issues -->

[issues-shield]: https://img.shields.io/github/issues/lobehub/dumi-theme-lobehub.svg?style=flat
[issues-url]: https://github.com/lobehub/dumi-theme-lobehub/issues/new/choose
