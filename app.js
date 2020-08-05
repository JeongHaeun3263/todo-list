'use strict';
//Selectors
const todoInput = document.querySelector('.todo__input');
const todoBtn = document.querySelector('.todo__btn');
const todoList = document.querySelector('.todo__list');
const filterOpt = document.querySelector('.filter-todo');
const todo = document.querySelector('.todo');

//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOpt.addEventListener('click', filterTodo);

//Function
function addTodo(event) {
  event.preventDefault();
  if (todoInput.value == '') {
    alert('Please type text');
    return;
  }
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('class', 'todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.setAttribute('class', 'todo__item');
  todoDiv.appendChild(newTodo);
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.setAttribute('class', 'completed-btn');
  todoDiv.appendChild(completedBtn);

  const deletedbtn = document.createElement('button');
  deletedbtn.innerHTML = '<i class="fas fa-minus"></i>';
  deletedbtn.setAttribute('class', 'deleted-btn');
  todoDiv.appendChild(deletedbtn);

  todoList.appendChild(todoDiv);

  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;
  // DELETE TODO
  if (item.classList[0] === 'deleted-btn') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }

  //CHECK MARK
  if (item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  //console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'none';
        } else {
          todo.style.display = 'flex';
        }
        break;
    }
  });
}
