// VARIABLES
const divNotify = document.getElementById('divNotify');

// FUNCTIONS
const notify = (message, color) => {
    let h1 = document.createElement('h1');
    divNotify.style.backgroundColor = color;
    h1.innerHTML = message;
    divNotify.appendChild(h1);
    divNotify.classList.toggle("enableNotify");
    setTimeout(() => {
        divNotify.removeAttribute("style");
        divNotify.classList.toggle("enableNotify");
        divNotify.style.animation = "fadeOutNotify 0.35s ease-in-out";
    }, 2500);
};