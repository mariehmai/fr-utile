// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Français Utile",
  tagline: "Un site pour débuter en français",
  url: "https://francais-utile.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "mariehmai",
  projectName: "fr-utile",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/mariehmai/fr-utile",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/mariehmai/fr-utile",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Français Utile",
        logo: {
          alt: "Apprendre le français",
          src: "img/french-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Vocabulaire",
          },
          {
            to: "/exercices",
            position: "left",
            label: "Exercices",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/mariehmai/fr-utile",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Vocabulaire",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/mariehmai/fr-utile",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MH | Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
