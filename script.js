// script.js

// Function to add or remove class based on scroll position
function toggleNavbarClass() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY >= 100) {
      navbar.classList.add('navbarDark');
  } else {
      navbar.classList.remove('navbarDark');
  }
}

// Function to toggle the navigation menu on mobile devices
function toggleNav() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}

// Function to control the display of the scroll-to-top button
function toggleScrollButton() {
  const scrollButton = document.getElementById("myBtn");
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 10) {
      scrollButton.style.display = "block";
  } else {
      scrollButton.style.display = "none";
  }
}

// Function to scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
