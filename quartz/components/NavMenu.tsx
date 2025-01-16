import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((userOpts?: Options) => {
  function NavMenu(props: QuartzComponentProps) {
    return (
      <div class="navmenu">
        <p>🌷 <a href="/writing">Garden</a></p>
        <p>📚 <a href="/Library">Library</a></p>
        <p>💡 <a href="/teaching">Teaching</a></p>
        <p>🎤 <a href="/talks">Talks</a></p>
        <p>📜 <a href="/cv.pdf">CV</a></p>
        <p>🛠️ <a href="/colophon">Colophon</a></p>
      </div>
    )
  }
 
  return NavMenu
}) satisfies QuartzComponentConstructor
