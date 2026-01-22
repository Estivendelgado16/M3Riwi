
const form = document.querySelector('#formulario')
const product = document.querySelector('#producto')
const mount = document.querySelector('#cantidad')
const list = document.querySelector('#listProduc')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addProduct();
    renderProducts();
});

let productsList = [
    {name: 'Camisa', price: 20, id: 1},
];



function addProduct(){
    

    const productValue = product.value;

    if (!productValue || productValue.trim() === ''){
        alert('El nombre del producto no puede estar vacío');
        return;
    }

    const priceValue = mount.value;

    if (mount === '' || isNaN(priceValue)) {
        alert('La cantidad debe ser un número válido');
        return; 
    }



    const newProduct = {
        name: productValue,
        mount: Number(priceValue),
        id: Date.now()
    }

    productsList.push(newProduct);

    form.reset();   
    
    console.log(productsList);
}


function renderProducts(){
    list.innerHTML = '';

    productsList.forEach( prod => {
        const li = document.createElement('li');
        li.innerText = `Producto: ${prod.name} - Cantidad: ${prod.mount}`;
        list.appendChild(li);
    });
}