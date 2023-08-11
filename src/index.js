import './style.css';

controllProjectForm();

const data = [];

function Project(value) {
  return { value, todos: [] };
}

function controllProjectForm() {
  //This function is all about the project form

  //**variables */
  const showFormbtn = document.querySelector('.project-btn');
  const projectForm = document.querySelector('.project-form');
  const container = document.querySelector('.projects');
  const addBtn = projectForm.querySelector('.add-btn');
  const cancelBtn = projectForm.querySelector('.cancel-btn');
  const input = projectForm.querySelector('#project-name');

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
      const li = document.createElement('li');
      li.textContent = input.value;
      container.append(li);

      li.addEventListener('click', () => {
        //display todo section(main) on the screen
        //1. display the todo (stored one)
        //check if todo is stored
        //if todo is stored -> display the todo
        //if todo is empty

        //2. display the todo-add-btn
        controllTodoForm();
      });

      projectForm.classList.remove('show');
      return;
    }
  }

  function cleanFormInput() {
    //clean the input
    input.value = '';
  }
}

function controllTodoForm(e) {
  //project click -> display the stored todos

  //1. display the todos

  //2. display the todo-form

  const todoForm = document.querySelector('.todo-form');
  console.log('Show the form to make a todo');
  todoForm.classList.add('show');
}
