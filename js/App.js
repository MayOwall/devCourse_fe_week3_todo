function App({target, initialState}) {
  new Header({
    target,
    text : "Simple todo-list"
  });

  new TodoForm({
    target,
    onSubmit : (text) => {
      const nextState = [...todoList.state, {
        text
      }];
      todoList.setState(nextState);
      storage.setItem("todos", JSON.stringify(nextState));
    }
  });

  const todoList = new TodoList({
    target,
    initialState
  });
};