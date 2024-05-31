import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Leslie Myint",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google',
      tagId: 'G-JT0D8T1W29',
    },
    locale: "en-US",
    baseUrl: "lesliemyint.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified", // "created", "modified", "published"
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        siteTitle: "Bilbo Swash Caps", // "Great Vibes"
        header: "Kalam", // "Satisfy", "Shantell Sans", "Handlee"
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eee2dc", // "#faf8f8",
          lightgray: "#DDC6BA",
          gray: "#9e9e9e",
          darkgray: "#444444",
          dark: "#AC4E3B", // "#2b2b2b",
          secondary: "#ac3b61", // "#284b63",
          tertiary: "#F1810F",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: false,
        wikilinks: false
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "absolute" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
