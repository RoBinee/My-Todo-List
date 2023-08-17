let data = [
  { id: '000', title: 'default project1', todos: [] },
  { id: '010', title: 'default project2', todos: [] },
];

function Project(id, title) {
  return { id, title, todos: [] };
}

function addProjectToData(id, value) {
  const projectObj = Project(id, value);
  data.push(projectObj);
}

function removeProjectFromData(projectId) {
  data = data.filter((projectObj) => {
    if (projectObj.id !== projectId) {
      return projectObj;
    }
  });
}

export { data, addProjectToData, removeProjectFromData };
