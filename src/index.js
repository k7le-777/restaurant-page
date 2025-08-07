import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadContact from './loadContact';

function setupTabs() {
  document.getElementById('homeBtn').addEventListener('click', loadHome);
  document.getElementById('menuBtn').addEventListener('click', loadMenu);
  document.getElementById('contactBtn').addEventListener('click', loadContact);
}

document.addEventListener('DOMContentLoaded', () => {
  loadHome();      // Load default tab
  setupTabs();     // Set up tab navigation
});
