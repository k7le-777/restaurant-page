export default function loadMenu() {
  const content = document.getElementById('content');
  content.textContent = '';

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('tab-content');

  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';

  const list = document.createElement('ul');
  ['Pizza', 'Pasta', 'Salad'].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  menuDiv.appendChild(heading);
  menuDiv.appendChild(list);
  content.appendChild(menuDiv);
}
