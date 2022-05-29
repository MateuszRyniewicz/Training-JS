const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const pText = document.querySelector('p');

let fontSize = 36;

const SizeUpText = () => {
	if (fontSize >= 60) return;
	fontSize += 5;
	pText.style.fontSize = fontSize + 'px';
};

const SizeDownText = () => {
	if (fontSize <= 21) return;
	fontSize -= 5;
	pText.style.fontSize = fontSize + 'px';
};

const ChangeColor = () => {
	r = Math.floor(Math.random() * 255);
	g = Math.floor(Math.random() * 255);
	b = Math.floor(Math.random() * 255);

	pText.style.color = `rgb(${r},${g},${b})`;
};

sizeUp.addEventListener('click', SizeUpText);
sizeDown.addEventListener('click', SizeDownText);
color.addEventListener('click', ChangeColor);
