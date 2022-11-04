const btnFetch = document.getElementById('fetchTodos');

btnFetch.addEventListener('click', () =>
  fetch('./api/todos')
    .then((response) => response.json())
    .then((data) => data.forEach((todo) => console.log(todo))),
);
