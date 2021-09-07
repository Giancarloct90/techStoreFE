class DataFunctions {

    constructor() {
        this.uri = 'https://resttechstore.herokuapp.com/products';
        // this.uri = 'http://localhost:3000/products';
    }

    // FUNCTION TO GET ALL PRODUCTS
    async getAllProducts() {
        try {
            const response = await fetch(this.uri);
            const products = await response.json();
            console.log(products);
            return products;
        } catch (e) {
            return products;
        }
    }

    // TO SAVED PRODUCTS
    async saveProduct(nombre, precio, cantidad, imagen) {
        var formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('precio', precio);
        formData.append('cantidad', cantidad);
        formData.append('imagen', imagen);
        console.log(nombre, precio, cantidad);
        try {
            let response = await fetch(this.uri, {
                method: "POST",
                body: formData,
            });

            let res = await response.json();
            return res;
        } catch (e) {
            console.log(e);
        }
    }

}