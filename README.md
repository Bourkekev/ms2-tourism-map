# Milestone 2 - Tourism Map - by Kevin Bourke
This project is 

## UX

### User Stories

### Strategy

### Scope

### Structure

### Skeleton

### Surface

## Technologies Used

1. HTML
2. CSS
3. Bootstrap CSS Framework
4. Font Awesome
5. Google Fonts
6. Javascript - Minor uses of Javascript for enhancing the user experience.
7. TinyPNG - To keep transparent png sizes to a minimum I used the online png compressing service [TinyPNG](https://tinypng.com/).
8. [JQuery](https://jquery.com) - The project uses **JQuery** to simplify DOM manipulation. I used a very small jQuery script (global.js) to close the navbar when a sub menu item is clicked, because the sub menu items are only used for links to anchor points in the homepage.
9. I used Photoshop and Illustrator for image and svg manipulation.

Where possible, I tried to use classes that are built into a technology such as Bootstrap (like mb-lg-5) or Font Awesome (like fa-3x).

## Features
 
### Existing Features

### Features to consider implementing in the future

## Testing

### Validation

#### HTML
I validated the HTML with the [W3 Validation Service](https://validator.w3.org/). 

The forms' option fields reported as an error (even though it worked) at first because the select field is required, yet has an initial value from the first option field. If an option is initially selected due to the attribute, then the select control always has a value. Unless that value is set to the empty string there is no point in using the attribute required. So the fix is to add an empty value to the first option.


#### CSS

I validated the CSS with the [W3 CSS Validation Service](http://www.css-validator.org/) for CSS Level 3 and...

### Testing on Browsers, Screen sizes and Devices
I tested the website on the following browsers and devices:
- Chrome on PC and Mac
- Firefox on PC and Mac
- Safari on Mac
- Microsoft Edge V44
- Microsoft Internet Explorer V11
- Chrome on Samsung Galaxy S8, Android V9
- Firefox on Samsung Galaxy S8
- Native Browser on Samsung Galaxy S8
- Chrome on Lenovo 10" Tablet, Android V6

On all of the above the site worked fine as expected, except for some minor issues on IE11. Under the Teacher images there was a large space before their name. This was to do with the extra div I added to correct the images being squashed (see the section on Issues I had to overcome). This was easily fixed by giving the div an explicit height of 100%. Also, as I expected the CSS scroll-behaviour property would not work on IE11, Edge or Safari.

Testing other devices - I ran the website through [Browser Stack](https://www.browserstack.com/) on a free account to test on real devices and screen sizes. I was able to live test the following devices:
 - Samsung Galaxy Tab, Chrome, 4, 10.1 in - 5.4 x 8.6in, Resolution 1280 x 800px
 - iPhone 6S, Safari, 4.7 in - 2.3 x 4.1 in, Resolution 750 x 1334px, Viewport 375 x 667 dp
 - iPad Air 2, iOS v8, Safari, Resolution 9.7 in - 5.8 x 7.8in, Viewport 768 x 1024 dp
 
They worked fine apart from iPad Air 2, which seemed to break the Bootstrap grid. Some research indicated that the CSS flex property was not supported on iOS v8. Considering iOS 8 was out in 2014, this is probably not much of an issue now. Apple would usually push updated to devices over the years. Ref - https://github.com/twbs/bootstrap/issues/24012

## Deployment

### GitHub Pages
This site is hosted using GitHub pages, deployed directly from the master branch of GitHub. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To host on GitHub pages you must follow these steps:
1. Go to the project repository
2. Go to the Settings tab
3. Scroll down to the GitHub pages section and set the source to master branch. This turns on GitHub pages for this repository
4. The page reloads, so you must scroll back down to GitHub pages and there you will get your url for viewing the site

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/Bourkekev/ms1-music-school.git` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

### My own domain
I also uploaded the files for my site (except git folders or files) to a sub folder on my own domain via FTP. This can be viewed at http://kevinbourke.ie/ms1-music-school/.
I created a robots.txt file in my domain root and added `Disallow: /ms1-music-school/` to prevent search engines indexing this site.

## Issues I had to overcome

## Credits

### Design and Research

### Technical

### Content

### Media
- The photos and vectors (except logo) used in this site were obtained from:

### Acknowledgements

