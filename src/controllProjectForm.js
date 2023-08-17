import controllProject from './controllProject.js';
//This function is all about the project form
function controllProjectForm() {
  //**variables */
  const showFormbtn = document.querySelector('.project-btn');
  const projectForm = document.querySelector('.project-form');
  const input = projectForm.querySelector('#project-name');
  const addBtn = projectForm.querySelector('.add-btn');
  const cancelBtn = projectForm.querySelector('.cancel-btn');

  //**EventListener */
  showFormbtn.addEventListener('click', () => {
    //showForm
    displayForm(true);
  });

  //2. click add btn
  addBtn.addEventListener('click', () => {
    if (input.value.length === 0) {
      //if form is empty
      alert('Please write down a new project name');
      return;
    }
    controllProject().addNewProject(input.value);
    //hide form
    displayForm(false);
    //clean form
    cleanFormInput();
  });

  //3. Press enter to submit the form instead of clicking add btn
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.length === 0) {
      //if form is empty
      alert('Please write down a new project name');
      return;
    }
    controllProject().addNewProject(input.value);
    //hideform
    displayForm(false);
    //clean form
    cleanFormInput();
  });

  //4. click cancel btn
  cancelBtn.addEventListener('click', () => {
    //clean form
    cleanFormInput();
    displayForm(false);
  });

  function cleanFormInput() {
    //clean the input
    input.value = '';
  }

  function displayForm(value) {
    if (value) {
      //show form
      projectForm.classList.add('show');
    } else if (!value) {
      //hide form
      projectForm.classList.remove('show');
    }
  }
}

export default controllProjectForm;
