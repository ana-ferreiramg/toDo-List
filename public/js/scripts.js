const listTodos = document.querySelector('#wrapper #todos ul');
const task = document.querySelector('#wrapper input');
const add = document.querySelector('#wrapper .group-add-tasks-button button');
const inputAddTodo = document.getElementById('task');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

const Utils = {
  ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
};

function addTodo(item) {
  if (item !== '' && item != ' ') {
    const todo = {
      id: Utils.ID(),
      task: item,
      completed: false,
    };

    todos.push(todo);
    saveToStorage(todos);

    task.value = '';
  }
}
add.addEventListener('click', () => addTodo(task.value));
inputAddTodo.addEventListener('keyup', (e) => (e.keyCode === 13 ? addTodo(task.value) : 0));

function show(todos) {
  listTodos.innerHTML = '';

  todos.forEach((item) => {
    const checked = item.completed ? 'checked' : null;
    const li = document.createElement('li');

    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
            <div data-key=${item.id}>
                <input type="checkbox" class="checkbox" ${checked}>
                ${item.task}
            </div>

            <div class="delete-button" data-key=${item.id}>
                <i class="delete-button fas fa-trash-alt"></i>
            </div>
        `;

    listTodos.append(li);
  });
}

function saveToStorage(todos) {
  localStorage.setItem('list_todos', JSON.stringify(todos));
  show(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('list_todos');

  if (reference) {
    todos = JSON.parse(reference);
    show(todos);
  }
}

function toogle(id) {
  todos.forEach((item) => (item.id == id ? (item.completed = !item.completed) : item.completed));

  saveToStorage(todos);
}

function deleteTodo(id) {
  todos = todos.filter((item) => item.id != id);

  saveToStorage(todos);
}
getFromLocalStorage();

listTodos.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox') toogle(e.target.parentElement.getAttribute('data-key'));
  if (e.target.classList.contains('delete-button')) deleteTodo(e.target.parentElement.getAttribute('data-key'));
});
