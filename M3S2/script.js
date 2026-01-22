

/* Array of products  */
const productos = [
  { id: 1, nombre: "Perfume Bella Femme", precio: 120000, categoria: "perosnal" },
  { id: 2, nombre: "Crema corporal", precio: 45000, categoria: "personal" },
  { id: 3, nombre: "Cepillo facial eléctrico", precio: 89000, categoria: "beauty" },
  { id: 5, nombre: "Crema corporal 2x", precio: 12000, categoria: "personal"},
  { id: 3, nombre: "Cepillo facial eléctrico", precio: 89000, categoria: "beauty"},

];


/* Created set of  propiety id  */
const idsProductos = new Set(productos.map(p => p.id));


console.table(productos)
console.log(idsProductos)

/*Call the DOM btn by id and add event */
const btn = document.querySelector("#btn");
btn.addEventListener("click", pedirDatos);


/* function for add products and creating of object */
function pedirDatos() {
  let id;
  let nombre;
  let precio;

  //  PEDIR ID (hasta que sea válido)
  while (true) {
    id = Number(prompt("Ingresa ID"));
    
    /*Validation */
    if (!Number.isInteger(id) || id <= 0) {
      console.log("El ID debe ser un número entero válido");
      continue;
    }

    /*Validation */

    if (idsProductos.has(id)) {
      alert("Ese ID ya existe. Usa otro")
      console.log("ya existe el id");
      continue;
    }

    break;
  }

  //  PEDIR NOMBRE
  while (true) {
    nombre = prompt("Ingresa nombre");

    if (!nombre || nombre.trim() === "") {
      alert("este espacio no puede estar vacio")
      console.log("El nombre no puede estar vacío");
      continue;
    }

    break;
  }

  //  PEDIR PRECIO
  while (true) {
    precio = Number(prompt("Ingresa precio"));

    if (isNaN(precio) || precio <= 0) {
      alert("El precio debe ser mayor a 0")
      console.log("El precio debe ser mayor a 0");
      continue;
    }

    break;
  }

  /* object */
  const nuevoProducto = { id, nombre, precio };

  /*Update producs and set id */
  productos.push(nuevoProducto);
  idsProductos.add(id);

  console.log(" Producto agregado correctamente");
  console.table(productos);
}


const  btnDeletedId = document.querySelector("#deletedId")

btnDeletedId.addEventListener("click", eliminiarID)


function eliminiarID() {
  const idDeleted = Number(prompt("ingrese el id que quiere eliminar"))

  while (true ){

    if (!idDeleted || isNaN(idDeleted)){
      console.log("debe ser un numero");
      continue;
    }
    break
  }
  
  if (!idsProductos.has(idDeleted)){
    console.log("no existe el ID");
    return;
  }


  const index = productos.findIndex(p => p.id === idDeleted);

  if (index === -1){
    console.log("Producto no encontrado")
    return;
  }

  productos.splice(index,1)
  idsProductos.delete(idDeleted)

  console.table(productos)
  console.log(idsProductos)

}

for (const id of idsProductos) {
    console.log(id)
}

const categoriaMap = new Map();

for (const producto of productos) {
  const  { categoria, nombre} = producto;

  if(!categoriaMap.has(categoria)) {
    categoriaMap.set(categoria, []);
  }

  categoriaMap.get(categoria).push(nombre, categoria)
  console.log(producto)
}

