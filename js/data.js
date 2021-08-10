console.log('data hello');

const getAllProducts = async ()=>{
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products
}

getAllProducts().then(products=>{
    console.log(products.products);
});