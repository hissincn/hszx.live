import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "衡中生存指南",
  description: "快速了解衡中和生活学习经验，避坑不合理的规章制度，最大限度保障学生权益，提高学习效率和生活质量。",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
