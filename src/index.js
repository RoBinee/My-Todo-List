const showFormbtn = document.querySelector('.project-btn');
const projectForm = document.querySelector('.project-form');
const container = document.querySelector('.container');

controllProjectForm();

function controllProjectForm() {
  //This function is all about the project form

  //**variables
  const addBtn = projectForm.querySelector('.add-btn');
  const cancelBtn = projectForm.querySelector('.cancel-btn');
  const input = projectForm.querySelector('#project-name');

  //**EventListener */
  showFormbtn.addEventListener('click', () => {
    //1. show form --later do this in css (we will toggle class)
    projectForm.style = 'display: block';
  });

  //2. click add btn
  addBtn.addEventListener('click', () => {
    addNewProject();
  });

  //3. click cancel btn
  //hide form --later do this in css (we will toggle class)
  cancelBtn.addEventListener('click', () => {
    cleanFormInput(); //hide the form after finish
    projectForm.style = 'display: none';
  });

  //4. Press enter to submit the form instead of clicking add btn
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewProject();
  });

  function addNewProject() {
    if (input.value.length === 0) {
      //if form is empty
      //alert "Please write down a new project name"
      alert('Please write down a new project name');
      return;
    } else {
      //if form is filled
      //show the content on the screen first
      const h1Test = document.createElement('h1');
      h1Test.textContent = input.value;
      container.append(h1Test);
      cleanFormInput();
      //hide the form after finish
      projectForm.style = 'display: none';
      return;
    }
  }

  function cleanFormInput() {
    //clean the input
    input.value = '';
  }
}
