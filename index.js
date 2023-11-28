const products = [
    { id: 0, name: "YESO TIPO 4 X LIBRA", brand: "Marca 1", price: 3000, image: "https://i.ebayimg.com/images/g/2WEAAOSwU4phhrBh/s-l500.jpg" },
    { id: 1, name: "TURBINA ESTANDAR", brand: "Marca 2", price: 200, image: "https://i.ebayimg.com/images/g/2WEAAOSwU4phhrBh/s-l500.jpg" },
    { id: 2, name: "TORNILLO DE EXPANSION MEDIANO", brand: "Marca 2", price: 200, image: "https://i.ebayimg.com/images/g/2WEAAOSwU4phhrBh/s-l500.jpg" },
    { id: 3, name: "TOPES PARA MARCAR INSTRUMENTAL AZUL", brand: "Marca 2", price: 200, image: "https://i.ebayimg.com/images/g/2WEAAOSwU4phhrBh/s-l500.jpg" },
    { id: 3, name: "TOPES PARA LIMAS", brand: "Marca 2", price: 200, image: "https://i.ebayimg.com/images/g/2WEAAOSwU4phhrBh/s-l500.jpg" },
    { id: 3, name: "TIRAS SEPARADORAS ACERO", brand: "Marca 2", price: 200, image: "https://i.ebayimg.com/images/g/2WEAAOSwU4phhrBh/s-l500.jpg" },
]

//Funcion para procesar lista de productor y vista d estos
function listarProductos() {
    products.forEach(element => producto(element.name, element.brand, element.price, element.image)
    );
}

//Funcion para crear vista del producto
function producto(name, brand, price, image) {

    //Creamos elementos con caracteristicas html
    const imagen = document.createElement('img');
    imagen.src = image;
    imagen.className = "productImg";
    imagen.id = "productImg"


    const nombre = document.createElement("h2");
    nombre.innerText = name;
    nombre.className = "productName";
    nombre.id = "productName"


    const marca = document.createElement("p");
    marca.innerText = brand;

    const precio = document.createElement("p");
    precio.innerText = price;

    const boton = document.createElement("button");
    boton.innerText = "buy"
    
    //pintamos los elementos en el DOM, dependera el orden
    document.body.appendChild(imagen);
    document.body.appendChild(nombre);
    document.body.appendChild(marca);
    document.body.appendChild(precio);
    document.body.appendChild(boton);
}


