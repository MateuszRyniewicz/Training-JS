const convert = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const restBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahren;
let cel;

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F';
		two.textContent = '°C';
		result.textContent = '';
	} else {
		one.textContent = '°C';
		two.textContent = '°F';
		result.textContent = '';
	}
};

const FarToCel = () => {
	fahren = convert.value * 1.8 + 32;
	result.textContent = `${convert.value}C to ${fahren.toFixed(1)}F`;
	convert.value = '';
};

const CelToFar = () => {
	cel = (convert.value - 32) / 1.8;
	result.textContent = `${convert.value}F to ${cel.toFixed(1)}C`;
	convert.value = '';
};

const converter = () => {
	if (convert.value !== '') {
		if (one.textContent == '°C') {
			FarToCel();
		} else {
			CelToFar();
		}
	} else {
		result.textContent = 'you have to write number';
	}
};

const reseting = () => {
	convert.value = '';
	result.textContent = '';
};

changeBtn.addEventListener('click', swap);

convBtn.addEventListener('click', converter);

restBtn.addEventListener('click', reseting);
