# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![](./images/Screenshot%202022-12-29%20at%2009-08-08%20Stats%20Preview%20Card.png)

### Links

- Solution URL: [Stats preview card component](https://www.frontendmentor.io/solutions/stats-preview-card-component-41kQX3O0jr)
- Live Site URL: [KevHec - Stats preview card component](https://kevhec.github.io/frontEndMentor/projects/Stats_preview_card_component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I was confused about how to give the image the color overlay. Doing some experiments, I ended up giving a div the background-image property and assigning to it a *linear-gradient* over the image to create the effect.

```css
.card__image {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to left, var(--cl-primary-400-a), var(--cl-primary-400-a)), url(../images/image-header-mobile.jpg);
    background-size: cover;
}
```

### Continued development

Some feedback on frontedmentor said It was a better option to use *blend-mode* property instead of linear gradient and I agreed, but I'm keeping this solution unchanged so I can see my progress over the time.

## Author

- Frontend Mentor - [@Kevhec](https://www.frontendmentor.io/profile/Kevhec)
- Twitter - [@Kev_Hec](https://twitter.com/Kev_Hec)