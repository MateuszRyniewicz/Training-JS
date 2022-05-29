const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'Bardzo Dobre hasło';
		p.style.color = 'lime';
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = 'Dobre hasło';
		p.style.color = 'blue';
	} else {
		p.textContent = 'zle hasło';
		p.style.color = 'red';
	}
};

const checkPassword = () => {
	if (pass.value != '') {
		showMsg();
	} else {
		p.textContent = 'brak hasła';
		p.style.color = '';
	}
};

pass.addEventListener('keyup', checkPassword);
