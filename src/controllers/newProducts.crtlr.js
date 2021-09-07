import view from '../views/newProducts.html';
import {
    notify
} from './utils/notify';
import DataFunctions from '../model/DataFunctions2'
const dataFunctions = new DataFunctions();

export const newProducts = async () => {
    // CREATE A ELEMENTS
    let div = document.createElement('div');
    div.innerHTML = view;

    // VARIABLES
    const nombre = div.querySelector('#nombre');
    const precio = div.querySelector('#precio');
    const cantidad = div.querySelector('#cantidad');
    const file = div.querySelector('#file')
    const btnNuevoProducto = div.querySelector('#btnNuevoProducto');
    const newProducts = div.querySelector('#newProducts');
    const navLinkStore = div.querySelector("#navLinkStore");
    const divValidateForm = div.querySelector("#divValidateForm");
    const loadDiv2 = div.querySelector('#loadDiv2');

    // FUNCTIONS
    // NOTYFORM TO NOTIFY FORM
    const notifyForm = (messages, params) => {
        loadDiv2.style.display = 'none';
        let html = "";
        divValidateForm.innerHTML = "";
        messages.forEach((message, index) => {
            html += `<li>${message}</li>`;
        });
        params.forEach((param) => {
            document.getElementById(param).style.border = "2px solid red";
        });
        let ul = document.createElement("ul");
        ul.innerHTML = html;
        divValidateForm.appendChild(ul);
        divValidateForm.style.display = "block";
    };

    // FUNCTION TO SAVED A PRODUCTS
    btnNuevoProducto.addEventListener("click", async (e) => {
        // DELETE BORDER RED OF INPUT TAG
        let inputs = document.querySelectorAll("input");
        inputs.forEach((element) => {
            document.getElementById(element.getAttribute("id")).removeAttribute("style");
        });
        divValidateForm.style.display = "none";
        loadDiv2.style.display = 'block';
        try {
            let res = await dataFunctions.saveProduct(nombre.value.trim(), precio.value.trim(), cantidad.value.trim(), file.files[0]);
            console.log(res);
            if (res.ok && !res.validate) {
                clearForm();
                return notify(res.message, 'rgb(67, 192, 67)');
            }
            if (!res.ok && res.validate === true) {
                notifyForm(res.message, res.params);
                return;
            } else {
                clearForm();
                notify(res.message, 'rgb(238, 101, 101)');
            }
        } catch (error) {
            clearForm();
            console.log('Servidor Inalcanzable');
            notify('Servidor Inalcanzable', 'rgb(238, 101, 101)');
        }
    });

    // TO CLEAR FROM
    const clearForm = () => {
        loadDiv2.style.display = 'none';
        nombre.value = "";
        precio.value = "";
        cantidad.value = "";
        file.value = "";
    }

    return div;
}