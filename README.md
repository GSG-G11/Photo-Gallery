# Photo-Gallery 🖼

`Photo-Gallery` An application that depends on the API to display the data inside it from the server, where you can search for gifs that is related to any field.

### Live demo [_here_](https://photo-gallery-g11.herokuapp.com/)

## Table of Contents :link:

- [Problem](#problem)
- [Solution](#solution)
- [Features](#features)
- [User Stories](#user-stories)
- [User Journey](#user-journey)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [APIs](#apis)
- [Usage](#usage)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Problem <span id="problem"></span> :interrobang:

- Lack of websites that provide the ability for the user to search for any photo they whould like, with controllers like photos limit number.

## Solution <span id="solution"></span> :100:

- Build a website that helps users to search for any photo for anything they whould like to see _`Photo-Gallery`_.

## Features <span id="features"></span> :bookmark_tabs:

- Simple UI
- Responsive
- Search Photos
- Handle server errors (500 error page)
- Handle cleint errors (404 error page)
- Cover all user-input cases (Handle non-valid search input)
- Clean Code
- Reusable Code

## User Stories <span id="user-stories"></span> :memo:

### As a user:

- I want to be able to search for any gif.
- I want to be able to select the number of gifs to show.
- When I search for invalid input I want to get a message informing me about the limit number of photos and allowed words to search.
- I want to know more about your website by viewing an about page.
- I want to see a loading screen when fetching data from external APIs.
- I want to see 404 page if i didnt found page that i want, and 500 page for To know that the site is not working at the moment.

## User Journey <span id="user-journey"></span> :airplane:

- When opening the `Photo-Gellary` website you'll be faced with our logo and a link to visit our`about` page.
- when you visit `about` page by the link, you will see description for our site and button for back to `home` page.
- In the `home` page, you will see two input fields, you can search for any gif you want by typing the search-term in the input-field that has the placeholder `search a photo`, and you can select the number of the gifs too.
- While you're waiting for the data to load you'll see a loading screen which will disappear when the data is ready.
- If the search does not meet the verification requirements, a message will appear informing you about what is allowed to be written.
- If the gif you've searched for is not available, a Popup window will appear to inform you that we don't have what you've searched for, you can close the popup by clicking anywhere in the website.

## Screenshots <span id="screenshots"></span> :mag_right:

> Note: all screenshots are from a device which is 1000px wide

- Home Page

![](https://i.imgur.com/8Q2XUoQ.png)

- Loading Screen

![](https://i.imgur.com/y2wCM9r.png)

- Validation Data

![](https://i.imgur.com/grEB0bH.png)

- Not Found Data

![](https://i.imgur.com/ipu0Lce.png)

- About Page

![](https://i.imgur.com/w81KdJG.png)

## Technologies Used <span id="technologies-used"></span> :computer:

- HTML5
- CSS3
- JavaScript (APIs, fetch)
- node.js (express.js)

## Photo-Gallery uses <span id="apis"></span> :key:

- [Gifs API](https://developers.giphy.com/docs/api/#quick-start-guide) for fetching gifs articles.

## Usage <span id="usage"></span> :1234:

- git clone `https://github.com/GSG-G11/Photo-Gallery.git`
- Change your current directory `cd ./ Photo-Gallery`
- Open it with your favorite text editor `code .`
- Enjoy Contributing to the **Photo-Gallery** website

## Project Status <span id="project-status"></span> :question:

Project is: **_Completed_**

## Acknowledgements <span id="acknowledgements"></span> :date:

- This project was based on [Week 5 - Code Academey](https://github.com/GSG-G11/curriculum/tree/main/coursebook/week-5).

## Contact <span id="contact"></span> 👥

Created by [@zaher-aa](https://github.com/zaher-aa), [@K6a1ed](https://github.com/K6a1ed) - feel free to contact us!
