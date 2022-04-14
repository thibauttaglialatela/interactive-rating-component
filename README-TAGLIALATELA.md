# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

https://ibb.co/N9C6rmj

### Links

- Solution URL: https://thibauttaglialatela.github.io/interactive-rating-component/
- Live Site URL: https://www.portfolio-taglialatela.fr/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow



### What I learned

const rates = document.querySelectorAll(".circle");
const ratingSentence = document.querySelector(".rate-selected h2");
const submit = document.querySelector('button');

rates.forEach((rate) => {
	rate.addEventListener('click', onClick, false);
})

function onClick(e) {
	let rate = e.currentTarget;
	rate.style.backgroundColor = 'orange';
	rate.style.color = 'white';
	document.querySelector("#rate").innerHTML = rate.innerText;
}

submit.addEventListener('click', (e) => {
	document.querySelector('.card').style.display = "none";
	document.querySelector('.thanks-card ').style.display = "flex";
})


### Useful resources

- [Mozilla Developer network] https://developer.mozilla.org/fr/


## Author

- Website - [Thibaut Taglialatela](https://www.portfolio-taglialatela.fr/)

