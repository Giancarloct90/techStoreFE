const dataFunctions = new DataFunctions();

// store page
const navLinkStore = document.getElementById("navLinkStore");
const divBurger = document.getElementById("divBurger");
const divProductsCards = document.getElementById('divProductsCards');
const loadDiv = document.getElementById('loadDiv');
// const btnTest = document.getElementById('btnTest');

// btnTest.addEventListener('click', () => {
//     loadDiv.style.animation = 'load 3s ease';
//     setTimeout(() => {
//         loadDiv.style.opacity = '0';
//     }, 3000);
// });

// BURGER BOTTON FUNCTION
divBurger.addEventListener('click', () => {
    console.log('hello');
    navLinkStore.classList.toggle('nav-open');
    divBurger.classList.toggle('toggle');
});

const renderProdcuts = async () => {
    loadDiv.style.opacity = '1';
    let products = await dataFunctions.getAllProducts();
    let html = '';
    if (products.ok) {
        console.log(products.products);
        products.products.map(product => {
            html += `<div class="cardPic">`;
            html += `<img id="imgCardProduct" src="${product.imagen}" alt="">`;
            html += `</div>`;
            html += `<div class="cardContent">`;
            html += `<h1 id="nombreCardProduct">${product.nombre}</h1>`;
            html += `<h3 id="precioCardProduct">${product.precio} LPS</h3>`;
            if (product.cantidad > 0) {
                html += `<h4 id="disponibleCardProduct">DISPONIBLE</h4>`;
            } else {
                html += `<h4 id="disponibleCardProduct">AGOTADO</h4>`;
            }
            html += `<button>ver detalle</button>`;
            html += `</div>`;

            // LOADING GIF FADE OUT
            loadDiv.style.animation = 'load 0.8s ease';
            setTimeout(() => {
                loadDiv.style.opacity = '0';
            }, 800);


            const div = document.createElement('div');
            div.classList.add('divCards');
            div.innerHTML = html;
            divProductsCards.appendChild(div);
            html = '';

        });
    } else {
        console.log('error server');
    }
}

(async () => {
    renderProdcuts();
})();