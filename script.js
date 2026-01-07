// Function to toggle the navigation menu on mobile devices
function toggleNav() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}

// Function to control the display of the scroll-to-top button
function toggleScrollButton() {
  const scrollButton = document.getElementById("myBtn");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollButton.style.display = (scrollTop > 5) ? "block" : "none";
}

// function to control the scrivimi button
const modal = document.getElementById('modal');
const open = document.getElementById('open');

open.addEventListener('click', e => {
  e.preventDefault();
  modal.style.display = 'flex';
});

modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});


// Function to scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Function to add or remove class based on scroll position
function toggleNavbarClass() {
  const navbar = document.querySelector('.navbar');
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  navbar.classList.toggle('scrolled', scrollTop >= 100);
}

// Add event listeners for scroll, menu icon click, and scroll-to-top button click
window.addEventListener('scroll', function() {
  toggleNavbarClass();
  toggleScrollButton();
});

const menuIcon = document.querySelector('#menu-icon');
if (menuIcon) {
  menuIcon.addEventListener('click', toggleNav);
}

const scrollButton = document.getElementById("myBtn");
if (scrollButton) {
  scrollButton.addEventListener('click', scrollToTop);
}
