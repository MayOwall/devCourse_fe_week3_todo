function TodoForm({ target, onSubmit }) {
  const formElement = document.createElement("form");
  target.appendChild(formElement);

  let isInit = false;

  this.render = () => {
    formElement.innerHTML = `
      <input type="text" name="todo" required/>
      <button>ADD</button>
    `;
    if(!isInit) {
      formElement.addEventListener("submit", e => {
        e.preventDefault();

        const inputElement = formElement.querySelector("input[name=todo]");
        const inputText = inputElement.value;

        if(inputText.length > 1) {
          inputElement.value = "";
          onSubmit(inputText);
        };
      });
      isInit = true;
    };
  };

  this.render();
}