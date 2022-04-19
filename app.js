const rates = document.querySelectorAll(".circle");
const ratingSentence = document.querySelector(".rate-selected h2");
const submit = document.querySelector('button');


rates.forEach((rate) => {
	rate.addEventListener('click', onClick, false);
})

function onClick(e) {
	let rate = e.currentTarget;
	rate.style.backgroundColor = 'hsl(25, 97%, 53%)';
	rate.style.color = '#fff';
	document.querySelector("#rate").innerHTML = rate.innerText;
}

submit.addEventListener('click', (e) => {
	document.querySelector('.thanks-card').classList.remove('hide');
	document.querySelector('.card').classList.add('hide');
})

