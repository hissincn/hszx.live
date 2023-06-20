import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://hszx.live",

  author: {
    name: "衡中生存指南",
    url: "https://hszx.live",
  },

  iconAssets: "iconfont",//"fontawesome-with-brands",

  //logo: "/logo.png",

  repo: "hissincn/hszx.live",

  docsDir: "src",
  fullscreen: true,

  // navbar
  navbar,

  // sidebar
  sidebar,

  //footer: "衡中生存指南",

  displayFooter: true,

  encrypt: {
    config: {
      //"/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "从 GitHub 编辑",
  },

  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "hissincn/hszx.live",
      repoId: "R_kgDOJxUcSg",
      category: "Announcements",
      categoryId: "DIC_kwDOJxUcSs4CXUId",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
     /*pwa: {
       favicon: "/favicon.ico",
       cacheHTML: true,
       cachePic: true,
       appendBase: true,
       apple: {
         icon: "/assets/icon/apple-icon-152.png",
         statusBarColor: "black",
       },
       msTile: {
         image: "/assets/icon/ms-icon-144.png",
         color: "#ffffff",
       },
       manifest: {
         icons: [
           {
             src: "/assets/icon/chrome-mask-512.png",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-mask-192.png",
             sizes: "192x192",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-512.png",
             sizes: "512x512",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-192.png",
             sizes: "192x192",
             type: "image/png",
           },
         ],
         shortcuts: [
           {
             name: "Demo",
             short_name: "Demo",
             url: "/demo/",
             icons: [
               {
                 src: "/assets/icon/guide-maskable.png",
                 sizes: "192x192",
                 purpose: "maskable",
                 type: "image/png",
               },
             ],
           },
         ],
       },
     },*/
  },
});
