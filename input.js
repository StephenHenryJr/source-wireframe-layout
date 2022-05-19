const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// Toggles the active class... by default the class of "active" is not set
// on our navbar-links. classList will access all classes in CSS.When we 
// click the button it will toggle adding and removing the class of active
toggleButton.addEventListener('click', () => {
   navbarLinks.classList.toggle('active') 
})
