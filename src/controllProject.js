import { nanoid } from 'nanoid';
import { addProjectToData, removeProjectFromData } from './data.js';

const controllProject = (() => {
  const container = document.querySelector('.projects');

  function addNewProject(inputValue, projectId) {
    if (!projectId) {
      //this data is a new one
      //make a new id and add to data arr
      //1. push new project in data array
      const projectId = nanoid();
      addProjectToData(projectId, inputValue);
    }
    //2.Build the project component
    const projectElement = createProjectElement(projectId, inputValue);
    //3. insert it to dom
    container.append(projectElement);
  }

  function removeProject(e) {
    //remove eventListener
    const project = e.currentTarget;
    const projectId = project.id;
    //remove from data
    removeProjectFromData(projectId);

    //remove from the screen
    container.removeChild(project);

    //remove showing todos
  }

  function createProjectElement(projectId, value) {
    const li = document.createElement('li');
    li.setAttribute('id', projectId);
    li.textContent = value;
    const removeBtn = document.createElement('button');
    removeBtn.classList = 'remove-btn';
    removeBtn.textContent = 'X';
    li.append(removeBtn);

    li.addEventListener('click', (e) => {
      // test code : display todo
      //if remove button is clicked
      if (e.target === removeBtn) {
        removeProject(e);
      } else {
        const main = document.querySelector('main');
        main.innerHTML = '<h1>display todo</h1>';
      }
    });

    return li;
  }

  return { addNewProject, createProjectElement };
})();

export default controllProject;
