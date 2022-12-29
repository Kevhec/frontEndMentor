# Frontend Mentor - Challenge name solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./images/Screenshot%202022-12-29%20at%2013-24-51%20Profile%20card%20component.png)

![](./images/Screenshot%202022-12-29%20at%2013-25-43%20Profile%20card%20component.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
The background's svgs positioning was really challenging, I had to use "*magic numbers*" to do the job but it was a hard job for me. I noticed I have to study more about positioning for this cases, well, not only working things are learnings.

```css
body {
    ...
    background-color: var(--cl-primary-400);
    background-image: 
        url(../images/bg-pattern-top.svg), 
        url(../images/bg-pattern-bottom.svg);
    background-position: top -25rem left -35rem, bottom -25rem right -35rem;
    ...
}
```

### Continued development

As I stated before, my focus will be, in part, **in the improvement of my positioning skills**, especially for background designs.

### Useful resources

- [background-position | mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) - This documentation was helpful for the background's svgs positioning.

## Author

- Frontend Mentor - [@Kevhec](https://www.frontendmentor.io/profile/Kevhec)
- Twitter - [@Kev_Hec](https://twitter.com/Kev_Hec)