export const getColumns = () => {
  const resources = {
    items: [
      {
        description: 'AIGC Components',
        openExternal: true,
        title: 'Lobe UI',
        url: 'https://github.com/lobehub/lobe-ui',
      },
      {
        description: 'Awesome lint configs',
        openExternal: true,
        title: 'xieyezi Lint',
        url: 'https://github.com/xieyezi/preset',
      },
      {
        description: 'xieyezi Dumi Theme',
        openExternal: true,
        title: 'Designed for Dumi 2',
        url: 'https://github.com/xieyezi/dumi-theme-xieyezi',
      },
    ],
    title: 'Resources',
  };

  const help = {
    items: [
      {
        description: 'Blog for xieyezi',
        openExternal: true,
        title: 'Blog',
        url: 'https://xieyezi.github.io',
      },
      {
        description: 'Report Bug',
        openExternal: true,
        title: 'xieyezi Dumi Theme',
        url: 'https://github.com/xieyezi/dumi-theme-xieyezi',
      },
    ],
    title: 'Help',
  };

  const more = {
    items: [
      {
        description: 'Github for xieyezi',
        openExternal: true,
        title: 'Github',
        url: 'https://github.com/xieyezi',
      },
    ],
    title: 'More',
  };

  return [resources, help, more];
};
