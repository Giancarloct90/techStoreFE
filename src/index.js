// VARIABLES
const divBurger = document.getElementById("divBurger");
const navLinkStore = document.getElementById("navLinkStore");
const aboutUsA = document.getElementById('aboutUsA');
const contactUsA = document.getElementById('contactUsA');

// TO SCROLL DOWN WHEN CLICK A TAG
aboutUsA.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 694);
});
contactUsA.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 1596);
});

// TO CLOSE MENU WHEN A TAG IS CLICKED
let as = document.querySelector('ul').querySelectorAll('a');
as.forEach(a => {
    a.addEventListener('click', () => {
        navLinkStore.classList.toggle('nav-open');
        divBurger.classList.toggle('toggle');
    });
})

// BURGER BUTTON FUNCTION
divBurger.addEventListener('click', () => {
    // console.log('hello');
    navLinkStore.classList.toggle('nav-open');
    divBurger.classList.toggle('toggle');
});