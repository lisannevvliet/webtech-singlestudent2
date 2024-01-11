# Browser compatibility report
The web page has been tested Safari and Chrome. It performed as expected on both browsers, the differences in appearence were minor. The only difference is that the print style is a bit more polished in Chrome, but that has nothing to do with the written CSS code. Safari renders the table on two pages instead of one, and ignores the `th, td { page-break-inside: avoid; }` rule. The print style has been tested by printing the page and saving it as a PDF file. The different screen sizes have been tested with Chrome DevTools.

## Browsers
The following browsers are included in this report:
- Chrome (Android)
- Edge
- Firefox (for Android)
- Opera (Android)
- Safari (on iOS)
- Samsung Internet
- WebView Android

## HTML
The following **fully** supported HTML form elements are used:
- `<input type="number">`
- `<input type="submit">`
- `<input type="text">`
- `<input type="url">`
- `<textarea>`

## CSS
The following **fully** supported CSS properties are used:
- `align-items`
- `background`
- `background-color`
- `background-image`
- `background-repeat`
- `border`
- `border-collapse`
- `border-color`
- `border-radius`
- `border-spacing`
- `border-style`
- `border-top`
- `border-width`
- `box-sizing`
- `caption-side`
- `color`
- `content`
- `cursor`
- `display`
- `flex-direction`
- `flex-grow`
- `float`
- `font`
- `font-family`
- `font-size`
- `font-style`
- `font-variant`
- `font-weight`
- `justify-content`
- `left`
- `list-style`
- `list-style-image`
- `list-style-position`
- `list-style-type`
- `margin`
- `margin-bottom`
- `margin-left`
- `margin-right`
- `margin-top`
- `outline`
- `padding`
- `padding-left`
- `page-break-after`
- `page-break-before`
- `page-break-inside`
- `position`
- `text-align`
- `text-decoration`
- `text-indent`
- `text-transform`
- `top`
- `transition`
- `vertical-align`
- `width`

The following **partly** supported CSS properties are used:
- `orphans`: Not supported on Firefox (for Android)
- `widows`: Not supported on Firefox (for Android)

## Source
The browser compatability of the HTML form elements and CSS properties has been determined with [MDN Web Docs](https://developer.mozilla.org/en-US/).