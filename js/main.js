const initialState = storage.getItem("todos", []);

const appElement = document.querySelector(".app");

new App({
  target : appElement,
  initialState,
});