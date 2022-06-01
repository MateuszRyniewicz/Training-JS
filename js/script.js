let todoInput; // miejsce gdzie uzytkownik wpisuje tresc zadania;
let errorInfo; // info o braku zadan / koniecznosc wpisania tekstu;
let addBtn; // przycisk ADD= dodaje nowe elementy do listy;
let ulList; // list zadan, tagi UL;
let newToDo; //Nowe dodane Li nowe zadanie;

let popup;
let popupInfo; //infomracje w popapie jak sie poda pusty tekst;
let toDoToEdit; //edytowanty toDo;
let toDoInput; //input w popapie;
let popapAtBtn; //btn w popapie;
let popapCloseBtn; //bnt zamykajact w popapie;

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

	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	toDoInput = document.querySelector('.popup-input');
	popapAtBtn = document.querySelector('.accept');
	popapCloseBtn = document.querySelector('.cancel');
};

const preapareDOMEvents = () => {
	//nadajemy nasluchiwanie

	addBtn.addEventListener('click', addNewTask);
	ulList.addEventListener('click', checkEvent);
	popapCloseBtn.addEventListener('click', closePopup);
	popapAtBtn.addEventListener('click', changeToDoText);
	todoInput.addEventListener('keyup', enterKeyCheck);
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

const checkEvent = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		editToDo(e);
	} else if (e.target.matches('.delete')) {
		deleteToDo(e);
	}
};

const editToDo = (e) => {
	toDoToEdit = e.target.closest('li');
	toDoInput.value = toDoToEdit.firstChild.textContent;
	console.log(todoInput.value);
	popup.style.display = 'flex';
};

const closePopup = () => {
	popup.style.display = 'none';
	popupInfo.textContent = '';
};

const changeToDoText = () => {
	if (toDoInput.value !== '') {
		toDoToEdit.firstChild.textContent = toDoInput.value;
		popup.style.display = 'none';
		popupInfo.textContent = '';
	} else {
		popupInfo.textContent = 'You have to add some text';
	}
};

const deleteToDo = (e) => {
	e.target.closest('li').remove();

	const allTodos = ulList.querySelectorAll('li');
	console.log(allTodos);

	if (allTodos.length === 0)
		errorInfo.textContent = 'You dont have any case to do!';
};

const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		addNewTask();
	}
};

document.addEventListener('DOMContentLoaded', main);
