/* Selecting the elements from the DOM. */
const hamburgerIcon = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.nav-links');
const hamburgerList = document.querySelectorAll('.click');
const close = document.querySelector('.ham-close');

/*
 When the hamburger icon is clicked, the hamburger menu is made visible and
 the hamburger icon is hidden.
 */
function openHamburger() {
  hamburgerMenu.setAttribute('style', 'visibility: visible');
  hamburgerIcon.setAttribute('style', 'display: none');
}
/* Adding an event listener to the hamburgerIcon element.
   When the hamburgerIcon is clicked, the openHamburger function is called.
*/
hamburgerIcon.addEventListener('click', openHamburger);

/*
 When the user clicks on the hamburger menu, the hamburger menu disappears
 and the hamburger icon reappears.
 */
function closeHamburger() {
  hamburgerMenu.setAttribute('style', 'visibility: hidden');
  hamburgerIcon.setAttribute('style', 'display: block');
}

/* Adding an event listener to the close element. When the close element
   is clicked, the closeHamburger function is called.
*/
close.addEventListener('click', closeHamburger);

/*
 When the user clicks on a list item, close the hamburger menu. */
function closeList() {
  hamburgerList.forEach((item) => {
    item.addEventListener('click', closeHamburger);
  });
}
closeList();
