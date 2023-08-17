const Main = (() => {
  const main = document.createElement('main');

  const h2 = document.createElement('h2');
  h2.textContent = 'Project name';

  const button = document.createElement('button');
  button.textContent = 'Add to-do';

  main.appendChild(h2);
  main.appendChild(button);

  return main;
})();

export default Main;
