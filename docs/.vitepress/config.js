module.exports = {
  title: "Javascript 权威指南第七版翻译",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/test" },
      { text: "Guide", link: "/guide/" },
      { text: "github", link: "test" },
    ],
    sidebar: [
      {
        text: "前言",
        link: "/preface/index",
        children: [{ text: "第一部分", link: "/preface/section-1" }],
      },
      {
        text: "第一章",
        link: "/chap01/index",
        children: [{ text: "第一部分", link: "/preface/section-1" }],
      },
    ],
    // sidebar: ["/", "/foo", ["/bar/index"]],
  },
};
