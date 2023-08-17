const Sidebar = (() => {
  const aside = document.createElement('aside');

  const h1 = document.createElement('h1');
  h1.textContent = 'Aside - projects';

  const button = document.createElement('button');
  button.className = 'project-btn';
  button.type = 'button';
  button.textContent = 'New project';

  const form = document.createElement('form');
  form.className = 'project-form';

  const label = document.createElement('label');
  label.textContent = 'Project name : ';
  label.setAttribute('for', 'project-name');

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'project-name';
  input.setAttribute('autocomplete', 'off');

  const addButton = document.createElement('button');
  addButton.type = 'button';
  addButton.className = 'add-btn';
  addButton.textContent = 'Add';

  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.className = 'cancel-btn';
  cancelButton.textContent = 'Cancel';

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(addButton);
  form.appendChild(cancelButton);

  const ul = document.createElement('ul');
  ul.className = 'projects';

  aside.appendChild(h1);
  aside.appendChild(button);
  aside.appendChild(form);
  aside.appendChild(ul);

  return aside;
})();

export default Sidebar;
