<h1>Dumi Theme xieyezi</h1>

dumi-theme-xieyezi is a documentation site theme package designed for `Dumi 2`. <br/>It provides a more beautiful and user-friendly development and reading experience based on `@lobehub/ui`

> This theme is based on secondary development of `Dumi Theme Lobehub`. Thanks for their work!

#### TOC

- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [🤯 Usage](#-usage)

####

</details>

## ✨ Features

- [x] 🤯 **Modern Theme Style:** This theme package adopts modern design techniques such as gradient colors, frosted glass, lighting effects, and natural animations to present the interface in a more concise and visually appealing way, making the documents more intuitive, readable, and user-friendly.
- [x] 🌓 **One-click Switch between Light and Dark Theme Mode:** Based on antd v5, custom algorithms for light and dark themes are provided by default, offering aesthetically pleasing and user-friendly options. Users can choose the theme mode according to their preferences and enjoy a good reading experience in different lighting environments.
- [x] 💅 **Based on Ant Design and CSSinJS:** This theme package uses antd as the base component library and implements the style solution using CSSinJS, which helps to better control the style details and improve style reusability and maintainability. The underlying antd-style library provides more flexibility, readability, and ease of maintenance in writing styles.
- [x] 🪄 **Exquisite Syntax Highlighting:** This theme package provides accurate and beautiful syntax highlighting. It utilizes modern syntax highlighting libraries like Shiki and Prism, and offers a rich set of code highlighting schemes to enhance code readability.
- [x] 🧩 **Flexible Component Reusability:** This theme package provides high flexibility for customizing local themes. It exports premium components from the theme package, which can be reused as independent modules. Developers can freely combine and use these components in the dumi local theme package.
- [x] 📱 **Well-Adapted for Mobile Devices:** This theme package is well-adapted for mobile devices. With the flexible style solution based on CSSinJS, multiple layout options are easily implemented. Users can enjoy a consistent and smooth experience across different devices.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📦 Installation

To install `dumi-theme-xieyezi`, run the following command:

```bash
$ pnpm add dumi dumi-theme-xieyezi
```

## 🤯 Usage

Usage After installation, start the site with `dumi`, and the theme will be automatically loaded for use.

```ts
interface SiteThemeConfig {
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
  simulatorUrl: string;
  siteToken?: SiteConfigToken;
  socialLinks?: {
    discord?: `https://discord.gg/${string}`;
    github?: string;
  };
  title?: string;
}
```

> **Note**\
> For detailed configuration, please refer to the [📘 Type file](https://github.com/xieyezi/dumi-theme-xieyezi/blob/master/src/types/config.ts) / [📘 Example](https://github.com/xieyezi/dumi-theme-xieyezi/blob/master/example/.dumirc.ts).
