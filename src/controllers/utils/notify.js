// VARIABLES

// FUNCTIONS
export const notify = (message, color) => {
    const divNotify = document.getElementById('divNotify');
    if (document.getElementById('lblH1')) {
        divNotify.removeChild(document.getElementById('lblH1'))
    }
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'lblH1');
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