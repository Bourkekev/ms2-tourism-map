# Milestone 2 - Tourism Map - by Kevin Bourke
This project is map of Dublin for visitors to recommend places to visit and show them locations on a map. There would be a separate listing of Activities (tourist - Castles, Galleries, Games like escape rooms, wall climbing), Events, Restaurants, Bars, Hotels. Different Icons would be used for different category of markers and I want users to be able to toggle map markers by category. The map will also show the Users current location (once they allow it), and I would like to be able to give directions from their location to a selected marker.

There will be a small weather widget which gives the current weather and Users can also search for other cities weather.

There will be a pull-out notepad for the user to save ideas of places to visit. They would be placed into a list and they can re-arrange them by dragging and dropping. I would like the possibility for the user to email this information to themselves as there is no database connected to store this information. 

## UX

### User Stories

### Strategy

### Scope

### Structure

### Skeleton

This formed the basis of my wireframes, which were created in Balsamiq:
- [Home page on desktop wireframe](assets/wireframes/homepage.png)

### Surface

The Dublin flag colours are #000080 and #88B8FD

Font Families - Finding fonts like Libre Baskerville that have style variants is a clever way to create nuance without overcomplicating your designs. This typeface is a classic serif that is beautifully applied as a heading and easy-to-read body copy. Reference https://www.canva.com/learn/the-ultimate-guide-to-font-pairing/

## Technologies Used

1. HTML
2. CSS
3. Bootstrap CSS Framework
4. Font Awesome
5. Google Fonts
6. Javascript 
7. Google Maps API
8. OpenWeather Map API
7. TinyPNG - To keep transparent png sizes to a minimum I used the online png compressing service [TinyPNG](https://tinypng.com/).
8. [JQuery](https://jquery.com) - The project uses **JQuery** to simplify DOM manipulation. I used a very small jQuery script (global.js) to close the navbar when a sub menu item is clicked, because the sub menu items are only used for links to anchor points in the homepage.
9. I used Photoshop and Illustrator for image and svg manipulation.

Where possible, I tried to use classes that are built into a technology such as Bootstrap (like mb-lg-5) or Font Awesome (like fa-3x).

## Features
 
### Existing Features

### Features to consider implementing in the future

1. Ideally the user could click on a button from an info window to store the location to the list or type their own text.
2. Have areas drawn on the map for shopping areas or socialising areas.

## Testing

### Validation

#### HTML
I validated the HTML with the [W3 Validation Service](https://validator.w3.org/). 



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

### Local Storage only storing data as strings

I struggled initially to get the list items stored as it was trying to store objects. I had to decide to either store my list as a single string containing html or as an object, which would require serialising the object to text first and de-serialising it after. The easiest way was to just store the innerHTML of the List UL as a string. This got updated and overrode the existing stored value each time a new item was added.

### Selecting and deleting the list item when X button is clicked.

It sounds like an easy thing to do, but I had trouble getting an event listener to work with all the delete buttons on the Note List. I wanted to do this using plain JavaScript and not rely on jQuery. As there were multiple buttons, the buttons were selected with getElementsByClassName and I tried looping through the buttons to add the eventListener to each. I ran into problems where it seemed the eventListener was not added to all buttons. It seems the problem was like the issue mentioned [here](https://www.nickang.com/add-event-listener-for-loop-problem-in-javascript/). Eventually I got that working but it would not work for newly created list item buttons.
In the end I added the eventListener to the body and if a click event's target has the delete button classname then it will delete that button's parent node (the li). The idea for the solution to this came from this [Stackoverflow question](https://stackoverflow.com/questions/14258787/add-event-listener-on-elements-created-dynamically). I modified this idea for my own

## Credits

### Design and Research

### Technical
 - For general references for Javascript methods I used my Code Institue notes, [MDN web docs](https://developer.mozilla.org/en-US/) and [w3schools](https://www.w3schools.com/js/default.asp).
 - For selecting and delete note list item i referenced this [Stackoverflow question](https://stackoverflow.com/questions/14258787/add-event-listener-on-elements-created-dynamically).
### Content

### Media
- The photos and vectors (except logo) used in this site were obtained from:

### Acknowledgements

