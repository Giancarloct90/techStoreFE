const dataFunctions = new DataFunctions();

const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const cantidad = document.getElementById('cantidad');
const file = document.getElementById('file')
const btnNuevoProducto = document.getElementById('btnNuevoProducto');
// store page
const navLinkStore = document.getElementById("navLinkStore");
const divBurger = document.getElementById("divBurger");
const divProductsCards = document.getElementById('divProductsCards');

// BURGER BOTTON FUNCTION
divBurger.addEventListener('click', () => {
    console.log('hello');
    navLinkStore.classList.toggle('nav-open');
    divBurger.classList.toggle('toggle');
});

btnNuevoProducto.addEventListener('click', async (e) => {
    let res = await dataFunctions.saveProduct(nombre.value.trim(), precio.value.trim(), cantidad.value.trim(), file.files[0]);
    console.log(res);
})