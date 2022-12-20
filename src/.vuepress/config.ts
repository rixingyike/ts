import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  // 每个GitHub帐号下只能有1个个人主页repo，但是可以有不限数量的项目主页repo。
  // 这个配置对应于repo的名字
  base: "/ts/",

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      // customFields: [
      //   {
      //     getter: (page) => page.frontmatter.category,
      //     formatter: "分类：$content",
      //   },
      //   {
      //     getter: (page) => page.frontmatter.tag,
      //     formatter: "标签：$content",
      //   },
      // ],
    }),
  ],

  locales: {
    // "/en/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "TypeScript PBL一本通",
      description: "用1个PBL实战项目完成TS渐进式立体式学习",
    },
  },

  theme,

  shouldPrefetch: false,
});
