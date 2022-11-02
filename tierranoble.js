//OBJETO CONSTRUCTOR DE PRODUCTOS
class misProductos {
    constructor(id, tipo, nombre, cantidad, precio) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
//METODO PARA PRECIO TOTAL CON IMPUESTOS
        this.sumarImp = function(){
            this.precioTotal = (this.precio) + (this.precio * 1.18)
        }
    }
}


//PRODUCTOS CONSTRUIDOS
const producto0 = new misProductos(0,"jabon", "cafe", "100gr", 70.00);
const producto1 = new misProductos(1,"jabon", "lavanda", "100gr", 60.00);
const producto2 = new misProductos(2,"jabon", "jazmin", "100gr", 60.00);
const producto3 = new misProductos(3,"jabon", "romero", "100gr", 80.00);
const producto4 = new misProductos(4,"jabon", "miel", "100gr", 80.00);
const producto5 = new misProductos(5,"jabon", "bergamota", "100gr", 85.00);
const producto6 = new misProductos(6,"salsa", "nuez", "300gr", 170.00);
const producto7 = new misProductos(7,"salsa", "morita", "300gr", 170.00);
const producto8 = new misProductos(8,"salsa", "almendra", "300gr",180.00);
const producto9 = new misProductos(9,"salsa", "chiltepin", "300gr",190.00);
const producto10 = new misProductos(10,"salsa", "pistache", "300gr",190.00);

//ARRAY
const productos = [producto0, producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10];


//PROMPT CONDICIONAL TEST DE RECOMENDACIONES
let recomend = prompt("(Seleccione el inciso correspondiente) Usted se considera una persona que disfruta de experiencias: A) Bienestar B) Gastronomicas");

    if ( recomend == "A") {
        alert("Te recomendamos nuestra seleccion de jabones artesanales para el auto-cuidado. Todos aportan diferentes beneficios. CONOCELOS!");
    }

    if (recomend == "B") {
        alert("Te recomendamos nuestra seleccion de salsas gourmet, con exquisitos frutos secos y sabores unicos que te sorprenderan con todas tus comidas. PRUEBALAS!");
    }

    else{
        alert("Nuestros productos son artesanales, hechos con ingredientes organicos de alta calidad. SEGURO ENCONTRARAS ALGO QUE TE ENCANTARA!!")
    }

//SELECCIONAR PRODUCTOS DE LISTA
    let msjListaProductos = "Seleccione el id# del producto deseado\n"

    for (componente of productos) {
        msjListaProductos += `${componente.id} - ${componente.tipo} - ${componente.nombre} - ${componente.cantidad} - $${componente.precio}\n`;
    }

    let selectAProd = parseInt(prompt(msjListaProductos));

    const selectedProd = productos.find((componente) => componente.id == selectAProd);

    console.log(selectedProd);

    alert(`Se ha agregado "${selectedProd.tipo} de ${selectedProd.nombre}" a tu lista de compras`)

    function renderBase() {
        for (elem of productos){
            let card = document.createElement("div")
    
            card.innerHTML = `<h2>${elem.tipo} de ${elem.nombre}</h2>
                                <p>${elem.descripcion}</p>
                                <h3>$${elem.precio} MXN</h3>
                                <button value="comprar">Comprar</button>`
            document.body.append(card)
        }
    }