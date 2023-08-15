const data = [];

function Project(value) {
  return { project: value, todos: [] };
}

//change the function name to controllProject
function controllProjectForm() {
  //This function is all about the project form

  //**variables */
  const showFormbtn = document.querySelector('.project-btn');
  const projectForm = document.querySelector('.project-form');
  const input = projectForm.querySelector('#project-name');
  const addBtn = projectForm.querySelector('.add-btn');
  const cancelBtn = projectForm.querySelector('.cancel-btn');
  const container = document.querySelector('.projects');

  //**EventListener */
  showFormbtn.addEventListener('click', () => {
    //showForm
    projectForm.classList.add('show');
  });

  //2. click add btn
  addBtn.addEventListener('click', () => {
    addNewProject();
    //clean form
    cleanFormInput();
  });

  //3. Press enter to submit the form instead of clicking add btn
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewProject();
    //clean form
    cleanFormInput();
  });

  //4. click cancel btn
  cancelBtn.addEventListener('click', () => {
    //clean form
    cleanFormInput();
    //hide the form --later do this in css (we will toggle class)
    projectForm.classList.remove('show');
  });

  function addNewProject() {
    if (input.value.length === 0) {
      //if form is empty
      alert('Please write down a new project name');
      return;
    } else {
      //if form is filled

      //1. push new project in data array
      //1-1 structure project object
      const projectObj = Project(input.value);
      //1-2 push it into data
      data.push(projectObj);

      //2.Build the project component
      container.append(createProjectElement(input.value));

      projectForm.classList.remove('show');
      return;
    }
  }

  function cleanFormInput() {
    //clean the input
    input.value = '';
  }
}

function createProjectElement(value) {
  const li = document.createElement('li');
  li.textContent = value;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  li.append(removeBtn);

  li.addEventListener('click', () => {
    // test code : display todo
    const main = document.querySelector('main');
    main.innerHTML = '<h1>display todo</h1>';
  });

  return li;
}

export default controllProjectForm;
