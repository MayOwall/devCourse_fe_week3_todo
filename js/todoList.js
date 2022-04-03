//생성자 함수 사용
function TodoList (params) {
  const todoListElement = document.createElement("div");
  const target = params.target;
  target.appendChild(todoListElement);

  this.state = params.initialState;

  this.render = () => {
    todoListElement.innerHTML = `
      <ul>
        ${this.state.map(todo => `<li>${todo.text}</li>`).join("")}
      </ul>
    `
  };

  this.render();
};
