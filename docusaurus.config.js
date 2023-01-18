// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Featureflow Docs',
  tagline: '',
  url: 'https://docs.featureflow.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'featureflow', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  themes: ['@docusaurus/theme-live-codeblock'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Featureflow Help Docs',
        logo: {
          alt: 'Featureflow',
          src: 'img/featureflow-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'doc',
            docId: 'quickstart/index',
            position: 'left',
            label: 'Quick Start',
          },
          {
            href: 'https://github.com/featureflow',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/intro',
              },
              {
                label: 'Quick Start',
                to: '/docs/quickstart/index',
              },
              {
                label: 'User Guide',
                to: '/docs/guides/index',
              },
              {
                label: 'Admin',
                to: '/docs/admin/index',
              },
              {
                label: 'SDKs',
                to: '/docs/sdks/index',
              },
              {
                label: 'Integrations',
                to: '/docs/integrations/index',
              },
            ],
          },
          /*{
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://featureflow.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/featureflow',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Feature Flow Pty. Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],

      },
    }),
};

module.exports = config;
