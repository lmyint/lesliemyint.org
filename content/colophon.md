---
title: "Colophon"
date: "2024-05-23"
lastmod: "2024-05-23"
---

This site was built using [Quartz 4.0](https://quartz.jzhao.xyz/).

Learning a new website creation system is challenging, so below, I'll detail my process for figuring out how to customize different components.

# Adding more Google Fonts

## Process

I wanted the page title to display in a different font than all of the other headers. In `quartz.config.ts`, I first tried changing the `header` key-value pair to take multiple arguments:

```ts
theme: {
      typography: {
        header: ["Kalam", "Bilbo Swash Caps"],
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      }
}
```

Didn't work. Then I tried adding another key-value pair:

```ts
theme: {
      typography: {
        siteTitle: "Bilbo Swash Caps", // NEW
        header: "Kalam",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      }
}
```

Didn't work. I knew that to embed Google fonts on a page, some embed code was needed. From the Google Fonts documentation, this would look something like:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet">
```

This would go in the `<head>` section of an HTML file. I needed to figure out how the `typograph` parameters were getting read into the `<head>` section, so I looked in `quartz/components` and found `Head.tsx`. In this file I found:

```tsx
return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
          </>
        )}
```

From this, I learned that the `googleFontHref()` function was the driver. Looking at the top of `Head.tsx`, I saw that this function was in the file `quartz/util/theme.ts`:

```tsx
import { googleFontHref } from "../util/theme"
```

## Solution

Inside  `quartz/util/theme.ts`, I modified the `googleFontHref()` function:

```ts
export function googleFontHref(theme: Theme) {
  const { code, header, body, siteTitle } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&family=${siteTitle}&display=swap`
}
```

<details>
    <summary>Original function</summary>

```ts
export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`
}
```
</details>

This required ensuring that `siteTitle` was a parameter in `quartz.config.ts`:

```ts
theme: {
      typography: {
        siteTitle: "Bilbo Swash Caps",
        header: "Kalam",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      }
}
```

Inside  `quartz/util/theme.ts`, I also modified the `joinStyles()` function to also include `siteTitleFont` as a new variable that could be referenced in style sheets:

```ts
export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --headerFont: "${theme.typography.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
  --siteTitleFont: "${theme.typography.siteTitle}";
}
`
}
```

I used `siteTitleFont` in `quartz/styles/custom.scss`:

```scss
.page-title {
  font-size: 2.5rem;
  font-family: var(--siteTitleFont);
}
```

# Left menu bar navigation

I didn't want to have `Component.Explorer()` so I created a static component that was just a list of links as `NavMenu.tsx`:

```tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((userOpts?: Options) => {
  function NavMenu(props: QuartzComponentProps) {
    return (
      <div class="navmenu">
        <p><a href="/writing">Garden</a></p>
        <p><a href="/teaching">Teaching</a></p>
        <p><a href="/talks">Talks</a></p>
        <p><a href="/cv.pdf">CV</a></p>
        <p><a href="/colophon">Colophon</a></p>
      </div>
    )
  }
 
  return NavMenu
}) satisfies QuartzComponentConstructor
```

# Changing date display

I wanted the metadata beneath the article title to look something like:
```
Last tended   May 22, 2024   ╌ ❖ ╌   1 min read
```

The "Last tended", separator between the date and "X min read", and the spacing between each of these components needed to be added.

There are three possible types (as found in `quartz/plugins/transformers/lastmod.ts`):
- `"created"`: corresponds to frontmatter `date`
- `"modified"`: corresponds to frontmatter `lastmod` or `updated`
- `"published"`: corresponds to frontmatter `publishDate`

I updated the `defaultDateType` in `quartz.config.ts` to be `"modified"`.

In `quartz/components/ContentMeta.tsx`, I made the following changes:

```tsx
const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: false, // Changed to false
}

if (fileData.dates) {
  segments.push("Last tended") // New
  segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
}

// Display reading time if enabled
if (options.showReadingTime) {
  const { minutes, words: _words } = readingTime(text)
 . const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
    minutes: Math.ceil(minutes),
})
  segments.push("╌ ❖ ╌") // new
  segments.push(displayedTime)
}

const segmentsElements = segments.map((segment) => <span class="content-meta-comp">{segment}</span>) // Added class="content-meta-comp"
```

Then I added the following to `quartz/styles/custom.scss`:

```scss
.content-meta-comp {
  font-family: var(--siteTitleFont);
  padding-right: 0.6em; /* This adds ths spacing */
}
```

# Custom domain

- [Setting up a Google domain for GitHub pages](https://dev.to/trentyang/how-to-setup-google-domain-for-github-pages-1p58)
- [Setting up a custom domain for GitHub pages](https://quartz.jzhao.xyz/hosting#custom-domain)
