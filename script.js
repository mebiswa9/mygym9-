'use strict';
let slideIndex = 0;

const slideShow = () => {
	let i;
	let slides = document.getElementsByClassName('item');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(slideShow, 2000);
};
slideShow();

const slideShow2 = () => {
	let i;
	let slides = document.getElementsByClassName('item2');
	console.log(slides[0]);
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(slideShow2, 2000);
};
slideShow2();
// const imgClass = () => {
// 	let img = document.getElementsByClassName('img');
// 	console.log(img);
// 	for (let i = 0; i < img.length; i++) {
// 		img[i].addEventListener('mouseenter', function () {
// 			let hidden = document.getElementsByClassName('hidden');
// 			console.log(hidden);
// 			hidden[i].style.display = 'block';
// 			// setTimeout(function () {
// 			// 	hidden[0].style.display = 'none';
// 			// }, 1000);
// 		});
// 	}
// 	for (let i = 0; i < img.length; i++) {
// 		img[i].addEventListener('mouseleave', function () {
// 			let hidden = document.getElementsByClassName('hidden');
// 			console.log(hidden);
// 			hidden[i].style.display = 'none';
// 		});
// 	}
// };
// const myMove = () => {
// 	let hidden = document.getElementsByClassName('hidden');
// 	console.log(hidden);
// 	hidden[0].style.display = 'block';
// 	// setTimeout(function () {
// 	// 	hidden[0].style.display = 'none';
// 	// }, 1000);
// };

// imgClass();
