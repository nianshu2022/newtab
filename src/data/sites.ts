export interface Website {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface SiteGroup {
  id: string;
  name: string;
  sites: Website[];
}

export const siteGroups: SiteGroup[] = [
  {
    id: "development",
    name: "开发工具",
    sites: [
      {
        id: "github",
        name: "GitHub",
        url: "https://github.com",
        icon: "https://github.githubassets.com/favicons/favicon.png"
      },
      {
        id: "stackoverflow",
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico"
      },
      {
        id: "mdn",
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        icon: "https://developer.mozilla.org/favicon-48x48.png"
      },
      {
        id: "npm",
        name: "npm",
        url: "https://www.npmjs.com",
        icon: "https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png"
      }
    ]
  },
  {
    id: "design",
    name: "设计资源",
    sites: [
      {
        id: "dribbble",
        name: "Dribbble",
        url: "https://dribbble.com",
        icon: "https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecfef09e66d4e70a08b2d2c.ico"
      },
      {
        id: "behance",
        name: "Behance",
        url: "https://www.behance.net",
        icon: "https://a5.behance.net/favicon.ico"
      },
      {
        id: "figma",
        name: "Figma",
        url: "https://www.figma.com",
        icon: "https://static.figma.com/app/icon/1/favicon.png"
      }
    ]
  },
  {
    id: "social",
    name: "社交媒体",
    sites: [
      {
        id: "twitter",
        name: "Twitter",
        url: "https://twitter.com",
        icon: "https://abs.twimg.com/favicons/twitter.3.ico"
      },
      {
        id: "reddit",
        name: "Reddit",
        url: "https://www.reddit.com",
        icon: "https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png"
      },
      {
        id: "youtube",
        name: "YouTube",
        url: "https://www.youtube.com",
        icon: "https://www.youtube.com/s/desktop/favicon.ico"
      }
    ]
  },
  {
    id: "news",
    name: "新闻资讯",
    sites: [
      {
        id: "hackernews",
        name: "Hacker News",
        url: "https://news.ycombinator.com",
        icon: "https://news.ycombinator.com/favicon.ico"
      },
      {
        id: "producthunt",
        name: "Product Hunt",
        url: "https://www.producthunt.com",
        icon: "https://www.producthunt.com/favicon.ico"
      }
    ]
  }
];

