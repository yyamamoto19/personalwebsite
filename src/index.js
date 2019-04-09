import 'bootstrap';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'


var typed = new Typed('#typed', {
	strings: ["Hello, my name is Kyoko.", "I like to sometimes drawa so", "I like to sometimes draw. Here are some of my works."],
	typeSpeed: 50,
	backSpeed: 50,
  	startDelay: 500,
  	backDelay: 400,
});

ScrollReveal().reveal('.art');
ScrollReveal().reveal('.kokoArt', { interval: 200, reset: true });
