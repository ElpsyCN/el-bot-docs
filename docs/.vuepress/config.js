module.exports = {
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "steelblue" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "steelblue" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/logo.png",
        color: "steelblue",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/logo.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "steelblue" }],
  ],
  title: "El Bot Docs",
  themeConfig: {
    logo: "/logo.png",
    repo: "ElpsyCN/el-bot-docs",
    docsDir: "docs",
    editLinks: true,
    smoothScroll: true,
    sidebarDepth: 2,
    collapsable: false,
    nav: [
      { text: "指南", link: "/guide" },
      {
        text: "项目",
        ariaLabel: "Project Menu",
        items: [
          { text: "el-bot-go", link: "/go/" },
          { text: "el-bot-web", link: "https://bot.elpsy.cn" },
        ],
      },
    ],
    sidebar: {
      "/go/": ["quick-start", "config-example", "config-syntax", "pre-def-var", "other-feature"],
      "/": ["guide", "go/", "about"],
    },
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-168287495-1",
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
};
