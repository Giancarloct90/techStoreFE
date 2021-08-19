const dataFunctions = new DataFunctions();

const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const cantidad = document.getElementById('cantidad');
const file = document.getElementById('file')
const btnNuevoProducto = document.getElementById('btnNuevoProducto');
// const btnTest = document.getElementById('btnTest');
const newProducts = document.getElementById('newProducts');
const navLinkStore = document.getElementById("navLinkStore");
const divBurger = document.getElementById("divBurger");
const divProductsCards = document.getElementById('divProductsCards');
const divValidateForm = document.getElementById("divValidateForm");
// const idH1DivNotify = document.getElementById('idH1DivNotify');
const loadDiv2 = document.getElementById('loadDiv2');



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

// BURGER BOTTON FUNCTION
divBurger.addEventListener("click", () => {
  console.log("hello");
  navLinkStore.classList.toggle("nav-open");
  divBurger.classList.toggle("toggle");
});

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

const clearForm = () => {
  loadDiv2.style.display = 'none';
  nombre.value = "";
  precio.value = "";
  cantidad.value = "";
  file.value = "";
}