import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Demo", 
    // icon: "discover", 
    link: "/demo/" 
  },
  {
    text: "Guide",
    // icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        // icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        // icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "更多作品",
    // icon: "home",
    // link: "https://yishulun.com",
    children: [
      {
        text: "博客",
        // icon: "creative",
        link: "https://yishulun.com",
      },
    ],
  },
]);
