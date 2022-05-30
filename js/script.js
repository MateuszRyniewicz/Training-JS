const burger = document.querySelector('.burger');
const barsIco = document.querySelector('.fa-bars');
const xIco = document.querySelector('.fa-times');
const nav = document.querySelector('nav ul');

const handleNav = () => {
	nav.classList.toggle('active');
	burger.classList.toggle('active');
	barsIco.classList.toggle('hide');
	xIco.classList.toggle('hide');
};

burger.addEventListener('click', handleNav);
