const Modal = (() => {
  const div = document.createElement('div');
  div.className = 'pop-up';

  const h1 = document.createElement('h1');
  h1.textContent = 'pop-up - todo form';

  div.appendChild(h1);

  return div;
})();

export default Modal;
