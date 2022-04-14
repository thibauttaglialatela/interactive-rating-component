const rates = document.querySelectorAll(".circle");
const ratingSentence = document.querySelector(".rate-selected h2");
const submit = document.querySelector('button');


rates.forEach((rate) => {
	rate.addEventListener('click', onClick, false);
})

function onClick(e) {
	let rate = e.currentTarget;
	document.querySelector("#rate").innerHTML = rate.innerText;
}

submit.addEventListener('click', (e) => {
	console.log('clicking');
	document.querySelector('.card').style.display = "none";
	document.querySelector('.thanks-card ').style.display = "flex";


})

