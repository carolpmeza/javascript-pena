//OBJETO CONSTRUCTOR DE PRODUCTOS
class misProductos {
    constructor(tipo, nombre, cantidad, precio) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
//METODO PARA PRECIO TOTAL CON IMPUESTOS
        this.sumarImp = function(){
            this.precioTotal = (this.precio) + (this.precio * 0.18)
        }
    }
}


//PRODUCTOS CONSTRUIDOS
const producto0 = new misProductos("jabon", "cafe", "100gr", 70.00);
const producto1 = new misProductos("jabon", "lavanda", "100gr", 60.00);
const producto2 = new misProductos("jabon", "jazmin", "100gr", 60.00);
const producto3 = new misProductos("jabon", "romero", "100gr", 80.00);
const producto4 = new misProductos("jabon", "miel", "100gr", 80.00);
const producto5 = new misProductos("jabon", "bergamota", "100gr", 85.00);
const producto6 = new misProductos("salsa", "nuez", "300gr", 170.00);
const producto7 = new misProductos("salsa", "morita", "300gr", 170.00);
const producto8 = new misProductos("salsa", "almendra", "300gr",180.00);
const producto9 = new misProductos("salsa", "chiltepin", "300gr",190.00);
const producto10 = new misProductos("salsa", "pistache", "300gr",190.00);


//PROMPT CONDICIONAL TEST DE RECOMENDACIONES
let recomend = prompt("Se considera usted una persona que disfruta de experiencias: A)bienestar B)gastronomicas");

    if ( recomend.toLowerCase =="bienestar") {
        alert("Te recomendamos nuestra seleccion de jabones artesanales para el autocuidado. Todos aportan diferentes beneficios. CONOCELOS!");
    }

    if (recomend.toLowerCase =="gastronomicas") {
        alert("Te recomendamos nuestra seleccion de salsas gourmet, con exquisitos frutos secos y sabores unicos que te sorprenderan con todas tus comidas. PRUEBALAS!")
    }

    else{
        alert("Nuestros productos son artesanales, hechos con ingredientes organicos de alta calidad. SEGURO ENCONTRARAS ALGO QUE TE ENCANTARA!!")
    }

//SELECCIONAR PRODUCTOS
    let muestraProductos = "Seleccione el producto deseado\n"

    for (producto of productos){
        muestraProductos += `${producto.tipo} - ${producto.nombre} - ${producto.cantidad} - $${producto.precio}\n`;
    }

    let seleccionProd = parseInt(prompt(muestraProductos);)