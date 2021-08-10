const nombre = document.getElementById('nombre')
const precio = document.getElementById('precio')
const cantidad = document.getElementById('cantidad');
const file = document.getElementById('file')
const btnNuevoProducto = document.getElementById('btnNuevoProducto');

btnNuevoProducto.addEventListener('click', async (e) => {
    let res = await saveProduct(nombre.value.trim(), precio.value.trim(), cantidad.value.trim(), file.files[0]);
    let data = await res.json();
    console.log(data);
})

const saveProduct = async (nombre, precio, cantidad, imagen) => {
    var formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('cantidad', cantidad);
    formData.append('imagen', imagen);
    console.log(nombre, precio, cantidad, imagen);
    try {
        let response = await fetch('http://localhost:3000/products', {
            method: "POST",
            body: formData,
        });

        let res = await response.json();
        return res;
    } catch (e) {
        console.log(e);
    }
}