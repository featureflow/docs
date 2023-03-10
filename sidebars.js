/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
      {type: 'autogenerated', dirName: '.'},
      {
        type: 'category',
        label: 'SDKs on Github',
        collapsible: true,
        collapsed: false,
        items: [
          {
            type: 'link',
            label: 'Java SDK',
            href: 'https://github.com/featureflow/featureflow-java-sdk', // The external URL
          },

          {
            type: 'link',
            label: 'NodeJS SDK',
            href: 'https://github.com/featureflow/featureflow-node-sdk/blob/master/README.md',
          },
          {
            type: 'link',
            label: '.NET SDK',
            href: 'https://github.com/featureflow/featureflow-dotnet-client',
          },
          {
            type: 'link',
            label: 'Javascript Client SDK',
            href: 'https://github.com/featureflow/featureflow-javascript-sdk',
          },
          {
            type: 'link',
            label: 'ReactJS',
            href: 'https://github.com/featureflow/react-featureflow-client',
          }
        ],
      },
  ],
  sdkLinksSidebar: [


  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
