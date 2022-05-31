let todoInput; // miejsce gdzie uzytkownik wpisuje tresc zadania;
let errorInfo; // info o braku zadan / koniecznosc wpisania tekstu;
let addBtn; // przycisk ADD= dodaje nowe elementy do listy;
let ulList; // list zadan, tagi UL;
let newToDo; //Nowe dodane Li nowe zadanie;

const main = () => {
	prepareDOMElements();
	preapareDOMEvents();
};

const prepareDOMElements = () => {
	//pobieramy wszystkie elelemnty

	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');
};

const preapareDOMEvents = () => {
	//nadajemy nasluchiwanie

	addBtn.addEventListener('click', addNewTask);
};

const addNewTask = () => {
	if (todoInput.value !== '') {
		newToDo = document.createElement('li');
		newToDo.textContent = todoInput.value;
		createTolsArea();

		ulList.append(newToDo);

		todoInput.value = '';
		errorInfo.value = '';
	} else {
		errorInfo.textContent = 'Wpisz tresc zadania';
	}
};

const createTolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools');
	newToDo.append(toolsPanel);

	const btnComplete = document.createElement('button');
	btnComplete.classList.add('complete');
	btnComplete.innerHTML = '<i class="fas fa-check"></i>';

	const btnEdit = document.createElement('button');
	btnEdit.classList.add('edit');
	btnEdit.textContent = 'EDIT';

	const btnDelete = document.createElement('button');
	btnDelete.classList.add('delete');
	btnDelete.innerHTML = '<i class="fas fa-times"></i>';

	toolsPanel.append(btnComplete, btnEdit, btnDelete);
};

document.addEventListener('DOMContentLoaded', main);
