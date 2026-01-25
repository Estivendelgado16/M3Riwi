const form = document.querySelector('#formulario');
const product = document.querySelector('#producto');
const mount = document.querySelector('#cantidad');
const list = document.querySelector('#listProduc');

// Recuperar notas desde localStorage o iniciar vacío
let productsList = JSON.parse(localStorage.getItem('notas')) || [];

// Al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    console.log(`Se cargaron ${productsList.length} notas`);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addProduct();
    renderProducts();
});

function addProduct() {
    const productValue = product.value.trim();
    const priceValue = mount.value;

    if (!productValue) {
        alert('El nombre del producto no puede estar vacío');
        return;
    }

    if (priceValue === '' || isNaN(priceValue)) {
        alert('La cantidad debe ser un número válido');
        return;
    }

    const newProduct = {
        name: productValue,
        mount: Number(priceValue),
        id: Date.now()
    };

    productsList.push(newProduct);

    // Guardar en localStorage
    localStorage.setItem('notas', JSON.stringify(productsList));

    form.reset();
    
}

function renderProducts() {
    list.innerHTML = '';

    productsList.forEach(prod => {
        const li = document.createElement('li');
        li.textContent = `Producto: ${prod.name} - Cantidad: ${prod.mount}`;

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'delete';
        btnDelete.addEventListener('click', () => {
            deletedProduct(prod.id);
        });

        li.appendChild(btnDelete);
        list.appendChild(li);
    });

}

function deletedProduct(id) {
    productsList = productsList.filter(prod => prod.id !== id);

    localStorage.setItem('notas', JSON.stringify(productsList));

    renderProducts();

    console.log(`Producto eliminado. Quedan ${productsList.length} notas`);
}

