const fileTabs = require("shared/fileTabs.js");

const users = [
  {
    caption: "User1",
    image: "/img/coa.svg",
    infoLink: "https://TODO",
    pinned: true
  },
  {
    caption: "User2",
    image: "/img/coa.svg",
    infoLink: "https://TODO",
    pinned: true
  }
];

const siteConfig = {
  title: "Platforms.gov.au - Message",
  tagline:
    "Platforms by the Australian Government for the Australian Government",
  url: "https://platforms-website.apps.y.cld.gov.au",
  baseUrl: "/",
  projectName: "message",
  headerLinks: [
    { doc: "architecture", label: "Concepts" },
    { doc: "overview", label: "Docs" },
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" }
  ],
  users,
  headerIcon: "img/coa.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#313131",
    secondaryColor: "#121212"
  },
  copyright: `© Commonwealth of Australia. With the exception of the Commonwealth Coat of Arms and where otherwise noted, this work is licensed under the MIT license.`,
  highlight: {
    theme: "default"
  },
  scripts: [
    "https://code.jquery.com/jquery-3.2.1.slim.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
  ],
  onPageNav: "separate",
  ogImage: "img/header-logo-agov.png",
  twitterImage: "img/header-logo-agov.png",
  blogSidebarTitle: { default: "Recent posts", all: "All blog posts" },
  usePrism: true,
  markdownPlugins: [md => fileTabs(md, { basePath: "../" })]
};

module.exports = siteConfig;
