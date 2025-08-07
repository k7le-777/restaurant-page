export default function loadContact() {
  const content = document.getElementById('content');
  content.textContent = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const email = document.createElement('p');
  email.textContent = 'Email: contact@example.com';

  content.appendChild(heading);
  content.appendChild(email);
}
