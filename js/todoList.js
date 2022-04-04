//생성자 함수 사용
function TodoList ({target, initialState}) {
  const todoListElement = document.createElement("div");
  target.appendChild(todoListElement);

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };
  
  this.render = () => {
    todoListElement.innerHTML = `
      <ul>
        ${this.state.map(({text}) => `<li>${text}</li>`).join("")}
      </ul>
    `
  };

  this.render();
};
