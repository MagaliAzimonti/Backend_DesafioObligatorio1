class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const datosProduct = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    if (this.products.find((e) => e.code === code)) {
      return console.error(
        "Error al guardar el producto, el código asignado ya existe, utilice otro"
      );
    }

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return console.error(
        "Error, debe completar todos los campos para guardar el producto"
      );
    }

    if (this.products.length === 0) {
      datosProduct.id = 1;
    } else {
      datosProduct.id = this.products[this.products.length - 1].id + 1;
    }
    return this.products.push(datosProduct);
  }

  getById(id) {
    let stock = this.getProducts();
    stock = stock.find((prod) => prod.id === id);
    function devolverId() {
      if (stock) {
        console.log("Producto buscado mediante el id", id, ":", stock);
      } else {
        return console.error(
          "Error, no existe un producto con el id solicitado"
        );
      }
    }
    return devolverId();
  }
}


/* PRUEBA */
//Crear instancia
let prueba = new ProductManager();

//Llamar al método getProducts para que arroje un array vacío
console.log(prueba.getProducts());

//Llamar al método addProduct para añadir un producto satisfactoriamente
//con id automático sin repetirse
prueba.addProduct(
  "Crema de manos Neroli Orquideas",
  "Crema de manos marca Semilla aroma a Neroli Orquideas",
  "$2100",
  "https://pbs.twimg.com/media/FEQcbYgXwAMzCq6.jpg:large",
  "ABC1",
  "23"
);
prueba.addProduct(
  "Crema de cuerpo Neroli Orquideas",
  "Crema de cuerpo marca Semilla aroma a Neroli Orquideas",
  "$3200",
  "http://cdn.shopify.com/s/files/1/0079/0734/4497/products/NEROLI_ORQUIDEAS_FRENTE.jpg?v=1642535074",
  "ABC2",
  "41"
);

//Llamar al método getProducts nuevamente, mostará el producto recién agregado
console.log(prueba.getProducts());

//Llamar el método addProduct para que arroje un error, por código repetido
prueba.addProduct(
  "Crema de cuerpo Neroli Orquideas",
  "Crema de cuerpo marca Semilla aroma a Neroli Orquideas",
  "$3200",
  "http://cdn.shopify.com/s/files/1/0079/0734/4497/products/NEROLI_ORQUIDEAS_FRENTE.jpg?v=1642535074",
  "ABC1",
  "41"
);
//error por no completar todos los campos
prueba.addProduct();
prueba.addProduct(
  "Crema de cuerpo Neroli Orquideas",
  "Crema de cuerpo marca Semilla aroma a Neroli Orquideas"
);

//Utilizar getById para encontar el producto
prueba.getById(1);
//o devolverá un error en caso de no encontrarlo
prueba.getById(10);
