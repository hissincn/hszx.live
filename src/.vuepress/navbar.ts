import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/overview.md",
  "/study/",
  "/life/",
  "/IT/",
  /*{
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },*/
  {
    text: "HZSB",
    icon: "book",
    link: "https://hzsb.info",
  },
]);
