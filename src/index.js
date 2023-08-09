const btn = document.querySelector('.project-btn');
const projectForm = document.querySelector('.project-form');
const container = document.querySelector('.container');

btn.addEventListener('click', controllProjectForm);

function controllProjectForm() {
  //**variables
  const addBtn = projectForm.querySelector('.add-btn');
  const cancelBtn = projectForm.querySelector('.cancel-btn');
  const input = projectForm.querySelector('#project-name');

  //1. show form --later do this in css (we will toggle class)
  projectForm.style = 'display: block';

  //2. click add btn
  addBtn.addEventListener('click', controllInput);

  function controllInput() {
    if (input.value.length === 0) {
      //if form is empty
      //alert "Please write down a new project name"
      alert('Please write down a new project name');
    } else {
      //if form is filled
      //show the content on the screen first
      const h1Test = document.createElement('h1');
      h1Test.textContent = input.value;
      container.append(h1Test);

      initializeForm();
    }
  }

  //3. click cancel btn
  //hide form --later do this in css (we will toggle class)
  cancelBtn.addEventListener('click', initializeForm);

  function initializeForm() {
    //clean the input
    input.value = '';
    //hide the form after finish
    projectForm.style = 'display: none';
    //remove eventListener
    addBtn.removeEventListener('click', controllInput);
  }
}
