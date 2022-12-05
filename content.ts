import type { PlasmoContentScript } from "plasmo"

/**
 * URL's that will affect content script
 */
export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

/**
 * This will be printed in the matches' console
 */
window.addEventListener("load", () => {
  console.log(
    "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
  )

  /**
   * you can modify web design of matches
   */
  document.body.style.background = "pink"
})
