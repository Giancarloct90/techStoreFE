// IMPORTS
import view from '../views/store.html';
import DataFunctions from '../model/DataFunctions2';

// VARIABLES
const dataFunctions = new DataFunctions();

let buttons = [];

export const store = async () => {

    // CREATE ELEMENT DIV
    let div = document.createElement('div');
    div.innerHTML = view;

    // VARIABLES
    const btnModalTest = div.querySelector('#btnModalTest');
    const divBigModal = div.querySelector('#divBigModal');
    const divProductsCards = div.querySelector('#divProductsCards');
    const divLbl = div.querySelector('#divLbl');
    const lblNotify = div.querySelector('#lblNotify');
    const txtBuscarStore = div.querySelector('#txtBuscarStore');
    const closeBTN = div.querySelector('#closeBTN');
    const h1ModalTitle = div.querySelector('#h1ModalTitle');
    const imgModal = div.querySelector('#imgModal');
    const h1ModalContentPrecio = div.querySelector('#h1ModalContentPrecio');
    const h2ModalContentCantidad = div.querySelector('#h2ModalContentCantidad');
    var productsGlobals;

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
            html += `<button id="${product._id}" class="btnDetalleStore" href="${dataFunctions.uri+'/'+product._id}">ver detalle</button>`;
            html += `</div>`;

            // LOADING GIF FADE OUT
            loadDiv.style.animation = 'load 0.8s ease';
            setTimeout(() => {
                loadDiv.style.opacity = '0';
            }, 800);

            // CREATE ELEMENT TO APPEND TO HMTL CONTENT
            const div2 = document.createElement('div');
            div2.classList.add('divCards');
            div2.innerHTML = html;
            divProductsCards.appendChild(div2);
            html = '';

            buttons.push(div2.querySelector('button'));
        });

        // TO PUT A ACTION A ANY BUTTON AUTOMATICLY CREATED FROM THE TABLES OF PRODUCTS
        buttons.forEach(button => {
            button.addEventListener('click', async () => {
                // alert(button.getAttribute('id'));
                let oneProductDB = await dataFunctions.getOneProduct(button.getAttribute('id'));
                let oneProduct = oneProductDB.oneProductDB;
                console.log(oneProduct);
                h1ModalTitle.innerHTML = oneProduct.nombre;
                h1ModalContentPrecio.innerHTML = `${oneProduct.precio} LPS`;
                imgModal.setAttribute('src', oneProduct.imagen);
                h2ModalContentCantidad.innerHTML = oneProduct.cantidad > 0 ? 'Disponible' : 'Agotado'
                divBigModal.style.display = 'block';
                divBigModal.style.animation = 'load2 0.5s ease-in-out'
            })
        });

        // TO CLOSE MODAL
        closeBTN.addEventListener('click', () => {

            divBigModal.style.animation = 'load 0.5s ease-in-out'
            setTimeout(() => {
                divBigModal.style.display = 'none';
            }, 500);
        });

    }

    // BEGIN OF ALL
    try {
        const products = await dataFunctions.getAllProducts();
        if (products.ok) {
            productsGlobals = products.products;
            await renderProdcuts(products.products);
        } else if (!products.ok) {
            console.log(products);
            lblNotify.innerHTML = `${products.message}`;
            divLbl.style.display = 'block';
        }
    } catch (e) {
        console.log(e);
        divLbl.style.display = 'block';
    }

    // TO FIND A PRODUCTS
    txtBuscarStore.addEventListener('keyup', () => {
        let productsFound = productsGlobals.filter(product => {
            return product.nombre.toUpperCase().indexOf(txtBuscarStore.value.toUpperCase()) !== -1;
        });
        // console.log(productsFound);
        renderProdcuts(productsFound);
    });
    return div;
}