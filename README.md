# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./images/Screenshot_testimonials.png)

### Links

- Solution URL: [https://github.com/Glorit74/testimonials-grid-section-main](https://github.com/Glorit74/testimonials-grid-section-main)
- Live Site URL: [https://glorit74.github.io/testimonials-grid-section-main/](https://glorit74.github.io/testimonials-grid-section-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind-CSS

### What I learned

How to use custom values for background-image in tailwind.config.js

```html
<div class="absolute right-6 lg:right-[4.5rem] top-0 w-32 h-32 bg-quotation bg-no-repeat z-1"></div>
```

```js
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    backgroundImage: {
      quotation: "url('./images/bg-pattern-quotation.svg')",
    },
    extend: {},
  },
  plugins: [],
};
```

### Useful link to the background image

- [Tailwind background image](https://tailwindcss.com/docs/background-image) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
