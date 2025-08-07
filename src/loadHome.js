export default function loadHome() {
  const content = document.getElementById('content');
  content.textContent = '';

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('tab-content');

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant';

  const para = document.createElement('p');
  para.textContent = 'We serve the best food in town.';

  homeDiv.appendChild(heading);
  homeDiv.appendChild(para);
  content.appendChild(homeDiv);
}
