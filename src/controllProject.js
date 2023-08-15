const data = [];

function Project(value) {
  return { project: value, todos: [] };
}

function controllProject() {
  const container = document.querySelector('.projects');

  function addNewProject(inputValue) {
    if (inputValue.length === 0) {
      //if form is empty
      alert('Please write down a new project name');
      return;
    } else {
      //if form is filled

      //1. push new project in data array
      //1-1 structure project object
      const projectObj = Project(inputValue);
      //1-2 push it into data
      data.push(projectObj);
      console.log(data);

      //2.Build the project component
      container.append(createProjectElement(inputValue));

      return;
    }
  }

  function removeProject(e) {
    //remove eventListener
    const li = e.currentTarget;
    //remove from data

    //remove from the screen
    container.removeChild(li);
  }

  function createProjectElement(value) {
    const li = document.createElement('li');
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

  return { addNewProject };
}

export default controllProject;
