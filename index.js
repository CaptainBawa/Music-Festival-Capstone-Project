// Mobile Hamburger Starts Here.
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
// Mobile Hamburger Ends Here.
// Dynamic Featured Musicians Starts Here.

// Selecting the musicians-sub-container element from the DOM.
const musicians = document.querySelector('.musicians-sub-container');

// An array of objects.
const musiciansObj = [
  {
    name: 'Ponobiom',
    intro: 'Ponobiom is a Ghanaian hiplife musician and rapper.',
    info: 'Ponobiom, is a prolific rapper, singer and songwriter. His hit song "Obiaa Wone Master" won the 2019 Hiplife Song of the Year.',
    image: './img/yaa-removebg-preview.png',
    imgalt: 'Ponobiom',
  },
  {
    name: 'Obrafour',
    intro: 'Obrafour is a Ghanaian hiplife musician and rapper.',
    info: 'His popular and hit album "Pae mu ka", for which he won 3 awards during the 2000 edition of Ghana Music Awards is one of the best selling albums in Ghana.',
    image: './img/obra-removebg-preview.png',
    imgalt: 'Obrafour',
  },
  {
    name: 'Sarkodie',
    intro: 'Sarkodie is a Ghanaian hiplife musician and rapper.',
    info: 'He was lauded for his impact on Ghana music, winning the Vodafone Music Award for "Artiste of the Decade" and BETs Best International Flow artist in 2019.',
    image: './img/sark-removebg-preview.png',
    imgalt: 'Sarkodie',
    className: 'hidden',
  },
  {
    name: 'Burna Boy',
    intro: 'Burna Boy, is a Nigerian singer, songwriter and record producer.',
    info: 'In 2012, he gained fame with "Like to Party" from his first album L.I.F.E. He signed with Bad Habit/Atlantic Records in the US and Warner Music Group worldwide in 2017.',
    image: './img/burn-removebg-preview.png',
    imgalt: 'Burna Boy',
    className: 'hidden',
  },
  {
    name: 'Lil Wayne',
    intro: 'Lil Wayne, is an American rapper and songwriter.',
    info: 'Lil Wayne achieved solo success with Tha Block Is Hot (1999) and gained more popularity through Tha Carter (2004), along with various mixtapes and collaborations from 2006-2007.',
    image: './img/lil-removebg-preview.png',
    imgalt: 'Lil Wayne',
    className: 'hidden',
  },
  {
    name: 'Nicki Minaj',
    intro: 'Nicki Minaj is a Trinidadian-born rapper, singer and songwriter based in the United States.',
    info: ' Nicki Minaj gained fame with three mixtapes between 2007-2009. Her debut album, Pink Friday (2010), reached #1 on the U.S. Billboard 200 chart.',
    image: './img/nicki-removebg-preview.png',
    imgalt: 'Nicki Minaj',
    className: 'hidden',
  },
];

// It loops through the musiciansObj array and adds the data to the musicians div
function musiciansFun() {
  musiciansObj.forEach((musician) => {
    musicians.innerHTML += `
    <div class="musicians ${musician.className}">
      <img src="${musician.image}" alt="${musician.imgalt}">
      <div class="profile-container">
        <h3>${musician.name}</h3>
        <p class="profile-sub-header">${musician.intro}</p>
        <hr class="profile-divider">
        <p>${musician.info}</p>
      </div>
    </div>`;
  });
}
// Calling the musiciansFun function when the window loads.
window.addEventListener('load', musiciansFun);
// Dynamic Featured Musicians Ends Here.
