// IMPORTS
const dataFunctions = new DataFunctions();

// VARIABLES
const navLinkStore = document.getElementById("navLinkStore");
const divBurger = document.getElementById("divBurger");
const divProductsCards = document.getElementById('divProductsCards');
const loadDiv = document.getElementById('loadDiv');
const divLbl = document.getElementById('divLbl');
const lblNotify = document.getElementById('lblNotify');
const txtBuscarStore = document.getElementById('txtBuscarStore');
var productsGlobals;

// ADDEVENTLISTENER
// BURGER BOTTON FUNCTION
divBurger.addEventListener('click', () => {
    console.log('hello');
    navLinkStore.classList.toggle('nav-open');
    divBurger.classList.toggle('toggle');
});

// TO FIND A PRODCUTS 
txtBuscarStore.addEventListener('keyup', () => {
    let productsFound = productsGlobals.filter(product => {
        return product.nombre.toUpperCase().indexOf(txtBuscarStore.value.toUpperCase()) !== -1;
    });
    // console.log(productsFound);
    renderProdcuts(productsFound);
});

// FUNCTIONS
// TO RENDER THE PRODUCTS
const renderProdcuts = async (products) => {
    console.log(products);
    divProductsCards.innerHTML = '';
    let html = '';
    // console.log(products);
    products.map(product => {
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

}

// BEGIN OF ALL
const main = async () => {
    loadDiv.style.opacity = '1';
    try {
        const products = await dataFunctions.getAllProducts();
        if (products.ok) {
            productsGlobals = products.products;
            return await renderProdcuts(products.products);
        } else if (!products.ok) {
            console.log(products);
            lblNotify.innerHTML = `${products.message}`;
            divLbl.style.display = 'block';
        }
    } catch (e) {
        divLbl.style.display = 'block';
    }
}

main();