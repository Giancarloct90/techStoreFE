console.log('hello')
const divBurger = document.getElementById("divBurger");
const nav_links = document.getElementById("nav-links");
const links = nav_links.querySelectorAll("a");


divBurger.addEventListener('click', () => {
    console.log('hello')
    nav_links.classList.toggle('nav-open');
    divBurger.classList.toggle('toggle');
});

links.forEach((link, index) => {
    link.addEventListener('click', () => {
        console.log(index);
        divBurger.classList.toggle('toggle');
        nav_links.classList.toggle('nav-open');
    })
});