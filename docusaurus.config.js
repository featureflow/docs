// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Featureflow Docs',
  tagline: '',
  url: 'https://docs.featureflow.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'featureflow', // Usually your GitHub org/user name.
  projectName: 'featureflow.github.io/docs', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [require.resolve('./src/plugins/ga4-cross-domain')],
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
          // 2.0.0 (versions.json[0]) is the version served at the site root.
          // noIndex adds a robots noindex meta tag, and the sitemap plugin
          // drops those routes. Canonical-to-current is not a docs option, and
          // 1.0.0 / next do not share a page-for-page URL map with 2.0.0.
          versions: {
            current: {
              noIndex: true,
            },
            '1.0.0': {
              noIndex: true,
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // GA4 is installed by src/plugins/ga4-cross-domain.js so the existing
        // G-4S76ENL11R tag can set a cross-domain linker. The preset plugin
        // only accepts trackingID and anonymizeIP.
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
            href: 'https://www.featureflow.com',
            label: 'Featureflow.com',
            position: 'left',
          },
          {
            href: 'https://api.featureflow.com/api/swagger-ui/index.html',
            label: 'API Reference',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/featureflow',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://app.featureflow.com/register',
            label: 'Sign up',
            position: 'right',
            className: 'navbar__item--signup',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Featureflow.com',
                href: 'https://www.featureflow.com',
              },
              {
                label: 'Sign up',
                href: 'https://app.featureflow.com/register',
              },
              {
                label: 'Blog',
                href: 'https://www.featureflow.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/featureflow',
              },
              {
                label: 'Login',
                href: 'https://app.featureflow.com',
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
