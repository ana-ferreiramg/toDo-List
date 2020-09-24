var listTodos = document.querySelector('#wrapper #todos ul');
var task = document.querySelector('#wrapper input');
var add = document.querySelector('#wrapper button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function show() {
    listTodos.innerHTML = '';

    for (todo of todos) {
        var div = document.createElement('div');
        var todoElement = document.createElement('li');
        var deleteTodoElement = document.createElement('i');
        var todoText = document.createTextNode(todo);

        deleteTodoElement.classList.add('fas');
        deleteTodoElement.classList.add('fa-trash-alt');

        var pos = todos.indexOf(todo);
        deleteTodoElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(div);
        div.appendChild(todoText);
        listTodos.appendChild(todoElement);
        todoElement.appendChild(deleteTodoElement);
    }
}

show();

function addTodo() {
    var todoText = task.value;

    if (todoText !== '' && todoText !== ' ') {
        todos.push(todoText);
    }

    task.value = '';

    show();
    saveToStorage();
}

add.onclick = addTodo;

var inputAddTodo = document.getElementById("task");

inputAddTodo.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addTodo();
    }
});

function deleteTodo(pos) {
    todos.splice(pos, 1);

    show();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

var list = document.querySelector('ul');

list.addEventListener("click", function(ev) {
    ev.preventDefault();
    if (ev.target.tagName === 'DIV') {
        ev.target.classList.toggle('done');
    }
});