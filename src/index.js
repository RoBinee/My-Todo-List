import './style.css';
import controllProjectForm from './controllProjectForm.js';
import { data } from './data.js';
import controllProject from './controllProject.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Main from './Main.js';
import Modal from './Modal.js';

//load page
window.addEventListener('DOMContentLoaded', initialPage);

function initialPage() {
  const content = document.querySelector('#content');
  content.append(Header, Sidebar, Main, Modal);
  controllProjectForm();

  if (data.length != 0) {
    //display default project
    data.forEach((item) => {
      const { id, title } = item;
      controllProject().addNewProject(title, id);
    });
  }
}
