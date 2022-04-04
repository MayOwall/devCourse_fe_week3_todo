function Header({target, text}) {
  const headerElement = document.createElement("h1");

  target.appendChild(headerElement);

  this.render = () => {
    headerElement.textContent = text;
  }

  this.render();
}