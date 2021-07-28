// store page
const navLinkStore = document.getElementById("navLinkStore");
const divBurger = document.getElementById("divBurger");

divBurger.addEventListener('click',()=>{
    console.log('hello');
    navLinkStore.classList.toggle('nav-open');
});