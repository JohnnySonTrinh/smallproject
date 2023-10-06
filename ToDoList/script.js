// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const dueDate = document.getElementById('due-date');
const todoList = document.getElementById('todo-list');

// Event Listener for Form Submission
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Capture User Input
  const todoValue = todoInput.value;
  const dueDateValue = dueDate.value;

  // Create New To-Do Item
  const newTodo = document.createElement('li');
  newTodo.innerText = todoValue;
  newTodo.setAttribute('data-due-date', dueDateValue);

  // Create Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  newTodo.appendChild(deleteButton);

  // Add Event Listener for Delete Button
  deleteButton.addEventListener('click', function (event) {
    event.stopPropagation();
    newTodo.remove();
    saveToLocalStorage(); // Update local storage
    console.log('Delete button clicked');
  });
  console.log('Event listener added');

  // Append to List
  todoList.appendChild(newTodo);

  // Save to Local Storage
  saveToLocalStorage();

  // Sort by Due Date
  sortByDueDate();

  // Clear Form Fields
  todoInput.value = '';
  dueDate.value = '';
});

// Save to Local Storage
function saveToLocalStorage() {
  const todos = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todo = todoList.children[i];
    const todoInfo = {
      text: todo.innerText,
      dueDate: todo.getAttribute('data-due-date'),
    };
    todos.push(todoInfo);
  }
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Load from Local Storage
function loadFromLocalStorage() {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  if (storedTodos) {
    for (const todoInfo of storedTodos) {
      const newTodo = document.createElement('li');
      newTodo.innerText = todoInfo.text;
      newTodo.setAttribute('data-due-date', todoInfo.dueDate);

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      newTodo.appendChild(deleteButton);

      todoList.appendChild(newTodo);
    }
  }
}

// Sort by Due Date
function sortByDueDate() {
  const todosArray = Array.from(todoList.children);
  todosArray.sort((a, b) => {
    const dateA = new Date(a.getAttribute('data-due-date'));
    const dateB = new Date(b.getAttribute('data-due-date'));
    return dateA - dateB;
  });

  for (const todo of todosArray) {
    todoList.appendChild(todo);
  }
}

// Call loadFromLocalStorage when the page loads
loadFromLocalStorage();

localStorage.clear();
