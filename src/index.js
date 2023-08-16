import './style.css';
import controllProjectForm from './controllProjectForm.js';
import { data } from './data.js';
import controllProject from './controllProject.js';

if (data.length != 0) {
  //display default project
  data.forEach((item) => {
    const { id, title } = item;
    controllProject.addNewProject(title, id);
  });
}

controllProjectForm();
