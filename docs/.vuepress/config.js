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
    repo: "YunYouJun/el-bot",
    docsDir: "docs",
    editLinks: true,
    smoothScroll: true,
    collapsable: false,
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "API", link: "/api/" },
      { text: "插件", link: "/plugins/" },
      {
        text: "生态",
        ariaLabel: "Ecosystem",
        items: [
          { text: "el-bot", link: "https://github.com/YunYouJun/el-bot/" },
          {
            text: "el-bot-api",
            link: "https://github.com/ElpsyCN/el-bot-api/",
          },
          {
            text: "el-bot-plugins",
            link: "https://github.com/ElpsyCN/el-bot-plugins/",
          },
          {
            text: "el-bot-template",
            link: "https://github.com/ElpsyCN/el-bot-template/",
          },
          { text: "el-bot-web", link: "https://bot.elpsy.cn" },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        "",
        "cli",
        "config",
        "database",
        "logger",
        "extend",
        "faq",
        "about",
      ],
      "/api/": ["", "status", "utils"],
      "/plugins/": ["", "default"],
      // fallback
      "/": [],
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
        updatePopup: {
          message: "文档更新啦～",
          buttonText: "刷新一下",
        },
      },
    ],
  ],
};
