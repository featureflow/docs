/**
 * Installs the existing GA4 tag (G-4S76ENL11R) and turns on cross-domain
 * linking. @docusaurus/plugin-google-gtag cannot set a linker, and the linker
 * command has to run before gtag('config'), so this plugin emits the snippet
 * itself. Do not also enable the preset `gtag` option — that would load the
 * tag twice.
 *
 * Setting `linker` here replaces domains configured in the GA4 admin UI, so
 * every domain that should share a session is listed.
 */
const TRACKING_ID = 'G-4S76ENL11R';

const LINKER_DOMAINS = [
  'www.featureflow.com',
  'featureflow.com',
  'app.featureflow.com',
  'docs.featureflow.io',
];

function ga4CrossDomainPlugin() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const linker = JSON.stringify({domains: LINKER_DOMAINS});

  return {
    name: 'ga4-cross-domain',

    getClientModules() {
      return [require.resolve('./ga4-client')];
    },

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.google-analytics.com',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.googletagmanager.com',
            },
          },
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`,
            },
          },
          {
            tagName: 'script',
            innerHTML: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('set', 'linker', ${linker});
gtag('js', new Date());
gtag('config', '${TRACKING_ID}', { 'anonymize_ip': true });
`,
          },
        ],
      };
    },
  };
}

module.exports = ga4CrossDomainPlugin;
