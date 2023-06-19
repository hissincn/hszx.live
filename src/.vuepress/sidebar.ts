import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "overview",
    {
      text: "学习指南",
      icon: "study",
      prefix: "study/",
      link: "study/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "生活指南",
      icon: "news",
      prefix: "life/",
      link: "life/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "信息技术指南",
      icon: "computer",
      prefix: "IT/",
      link: "IT/",
      collapsible: true,
      children: "structure",
    }
  ],
});
