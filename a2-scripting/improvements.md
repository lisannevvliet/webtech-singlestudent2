# Improvements from P1: Peer review A1

**General: This is the WCAG assessment according to guidelines set such that all types of users can understand and read the content coherently. Complies with principle 1.1 as all text inputs have corresponding names and is understandable as coherent and organized throughout the web page. However H2 is repeated 2 times once on h2 and secondly in the caption which can be confusing for the user, i’d recommend either having it as the caption or changing the h2 to a more relevant description to what the follow up content and table will be. For example in the caption: Table of favorite movie musicals. 1.2.2 Captions are provided accordingly. 1.3.1-1.3.2 Meaningful relationships between text and corresponding underlying information, it is organized and makes sense 1.4.1-1.4.5: The contrast for the navbar is slightly poor in my opinion as it turns into a similar color of that of the background however it is not in the main text so I wouldn't say it fails 1.4.1. Better idea would be when the link has been pressed to have more contrast between the background and the text itself. Resizing of text works on a flex column basis which works flawlessly when resized. 1.4.8 Text is well spaced out and the placement of the text makes sense, is coherent. However for the section types of musicals although we were forced to use dd dt an orphan widow implementation could have been wise in order to organize the data in such a way that fits all of it on the web page from left to right when in desktop mode but is a small detail. 2.4: Links aren't ambiguous and are readily understood and explained in subtext. Overall this webpage is highly compliant with the WCAG guidelines and has followed the instructions very carefully, very little to comment on and very little to improve upon. Make sure to continue to comply with this if there is more data to add to this webpage but overall very good.**

As written in the peer review, the web page complies with the following guidelines:
- 1.1
- 1.2.2 (not required)
- 1.3.1
- 1.3.2
- 1.4.1
- 1.4.2
- 1.4.3 (not required)
- 1.4.4 (not required)
- 1.4.5 (not required)
- 1.4.8
- 2.4

I have implemented the suggestion to remove the stand-alone `<h2>` element and encapsulate the `<caption>` element with one. Although the guideline 1.4.3 was not required, I have increased the contrast of the visited navigation links compared to the background. I didn't implement the suggestion for `<section id="types-of-musicals">` which stated that an orphan-widow implementation could have been used to fit all the data on the web page from left to right on a desktop. The widows property does not generally affect non-paged media such as screen, according to [CSS-Tricks](https://css-tricks.com/almanac/properties/w/widows/), so I'm not sure what is meant by this suggestion. It is also a level AAA guideline, so not required for the assignment.

Guidelines 1.3.3 and 2.1 (only level A) were the only ones which were required but not covered by the peer review. In my opinion, the web page complies with guideline 1.3.3 because instructions are provided for understanding (such as the labels of the form elements) and operating content do not rely solely on sensory characteristics of components. It also complies with guidelines 2.2.1 and 2.2.2, because the content does not set any time limits and the web page does not contain any moving, blinking, scrolling, or auto-updating information.

**There were no discrepancies when running HTML W3C validator. There were no discrepancies when running CSS W3C validator. All external website links work accordingly and are understandable to the end user.**

**Mobile-first is an approach in which the styling of the webpage is first made to be organized on a mobile resolution then to a desktop. And a desktop first approach is vice versa. This webpage (in my opinion) was designed using a desktop-first approach, my reasoning for my take on it is that the @media was used only after 762px such that the content should more so be towards 1000px for media because a lot of the media devices used today like ipads and such are operating at much higher resolutions than a width of 762 px. Another detail is that if the resolution is small enough(poor quality small screen case study) the nav bar does not look coherent anymore as it folds in onto itself, where the font size could be set to a percentage so that it always fits in the screen.**

I agree that the web page is designed using a desktop-first approach, because I've developed the mobile version after finishing the desktop one. I have tested the web page with the screen sizes that Chrome DevTools provides. The smallest size is named "Mobile S" and is 320px wide. I don't think it is reasonable to expect the web page to look accordingly on screen sizes smaller than that, as there aren't a lot of them, see [Viewport Sizes](https://viewportsizes.mattstow.com). The breakpoints of 767px and 1023px were chosen because the screen size of a tablet on Chrome DevTools is 768px wide, and the size of a laptop 1024px. I want tablets to show the desktop version, which is why I only made small adjustments for tablet compatibility. Mobiles should show the mobile version, which is specifically developed for this screen size.

**`In my webpage, I had forgotten to add a navbar at the top with several different href to different parts of the webpage. I had only implemented 1 which is rudimentary in comparison with this webpage. Secondly the use of form type number for the year is more intuitive than my implementation of form type text. I will consider implementing this in A2.`  
Another implementation that had gone over my head is a well coherent title on the main page although I have an H1 I dont believe it complies with 1.1 of the wcag compliance.**

**Actionable information is given in sub-comments for ease**

**I had already mentioned the us of dl dt dd, but In my opinion, it is a good implementation and is according to the the instructions however, it would've been a cleaner implementation to use columns and orphans in order to fit a defined number of lines in the webpage, but it is not a big deal.**

**The href links can be organized better such that they collapse or follow a top bar so that the website collapses accordingly such that the nav bar is not affected. This would make it easier for the user to navigate. This also with a better color scheme.**

I've changed to navigation bar to a flexbox, so that the navigation items are placed horizontally if possible.

**I had already mentioned the us of dl dt dd, but In my opinion, it is a good implementation and is according to the the instructions however, it would've been a cleaner implementation to use columns and orphans in order to fit a defined number of lines in the webpage, but it is not a big deal.**

**The use of orphans and widows in body, is seen as a warning in the style editor as they aren't valid property names for the given variable. The use of widow/orphans is used in the context of text and minimum spacing for a given <p> paragraph.**

I have changed the `orphans: 2;` and `widows: 2;` properties to apply to `p` instead of `body`.

**here too look down /**

**In terms of responsiveness of the website, 762 px for the breaking point on collapsing text is not large enough as when it does go to 762 px on the dot the webpage does not fit the screen as in the user needs to move left to right on the web page in order to read and understand the content on the page.**

When I try this myself, with a screen size width of 762px, there are no horizontal scroll bars. All content fits within the screen.