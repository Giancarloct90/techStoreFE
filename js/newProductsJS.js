const dataFunctions = new DataFunctions();

const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const cantidad = document.getElementById('cantidad');
const file = document.getElementById('file')
const btnNuevoProducto = document.getElementById('btnNuevoProducto');
const btnTest = document.getElementById('btnTest');
const divNotify = document.getElementById('divNotify');
// store page
const navLinkStore = document.getElementById("navLinkStore");
const divBurger = document.getElementById("divBurger");
const divProductsCards = document.getElementById('divProductsCards');

    const notify = (flag) => {
        nombre.value = '';
        precio.value = '';
        cantidad.value = '';
        file.value = '';
        flag ? divNotify.style.backgroundColor = 'rgb(90, 196, 86)' : divNotify.style.backgroundColor = 'rgb(209, 90, 90)';
        divNotify.classList.toggle('enableNotify');
        setTimeout(() => {
            divNotify.removeAttribute("style");
            divNotify.classList.toggle('enableNotify');
            divNotify.style.animation = 'fadeOutNotify 0.35s ease-in-out';
        }, 2500);


    }

// BURGER BOTTON FUNCTION
divBurger.addEventListener('click', () => {
    console.log('hello');
    navLinkStore.classList.toggle('nav-open');
    divBurger.classList.toggle('toggle');
});

btnNuevoProducto.addEventListener('click', async (e) => {
    let res = await dataFunctions.saveProduct(nombre.value.trim(), precio.value.trim(), cantidad.value.trim(), file.files[0]);
    console.log(res);
    res.ok ? notify(true) : notify(false);
})