//OBJETO CONSTRUCTOR DE PRODUCTOS
class Productos {
    constructor(id, tipo, nombre, tamano, precio, stock, descripcion, imagen) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.tamano = tamano;
        this.precio = precio;
        this.stock = stock;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    restaStock() {
        this.stock = this.stock - 1;
        console.log(`La actualizacion de existencias de ${this.nombre} ha sido enviada al almacen`)
    }

}

//PRODUCTOS CONSTRUIDOS
const producto0 = new Productos(0,"Jabon", "cafe", "100gr", 70.00, 20, "Activa la circulacion y reduce la celulitis",'jabonCafe.jpg' );
const producto1 = new Productos(1,"Jabon", "lavanda", "100gr", 60.00, 20, "Contribuye a la relajacion y desinflamacion", 'jabonLavanda.jpg');
const producto2 = new Productos(2,"Jabon", "jazmin", "100gr", 60.00, 20, "Aporta suavidad y elasticidad a la piel", 'jabonJazmin.jpg');
const producto3 = new Productos(3,"Jabon", "romero", "100gr", 80.00, 20, "Tonifica y regenera la piel", 'jabonRomero.jpg');
const producto4 = new Productos(4,"Jabon", "miel", "100gr", 80.00, 20, "Aporta hidratacion y nutricion a la piel", 'jabonMiel.jpg');
const producto5 = new Productos(5,"Jabon", "bergamota con rosas", "100gr", 85.00, 20, "Aporta antioxidantes para un aspecto rejuvenecedor", 'jabonBergamota.jpg');

const productos = [producto0, producto1,producto2,producto3,producto4,producto5]



//Tarjetas de los productos
function renderBootStrap(){
    for (elem of productos){
        let card = document.createElement("div")

        card.innerHTML = 
        `<div class="card" style="width: 18rem;">
            <img src="./media/${elem.imagen}" class="card-img-top" alt="imagen de ${elem.tipo} de ${elem.nombre}">
            <div class="card-body">
                <h5 class="card-title">${elem.tipo} de ${elem.nombre}</h5>
                <p class="card-text">${elem.descripcion}</p>
                <h3>$${elem.precio} MXN</h3>
                <input type="button" onClick="agregarCarrito(${elem.id})" href="#" class="btn btn-secondary addToCart" value="Comprar">
            </div>
        </div>`
        document.body.append(card)
}
}


//CARRITO
const arrayCarrito = [ ]

class objCarrito{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    subeCantidad(){
        this.cantidad = this.cantidad + 1
        Swal.fire({
            icon: 'success',
            title: 'Se agrego una unidad mas',
            text: 'Ya tenias  este producto en el carrito',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

function agregarCarrito(prod){

    let existenciaCarrito = arrayCarrito.find(e => e.producto == prod)
    if (existenciaCarrito != undefined){
        let posicion = arrayCarrito.findIndex(elem => elem.producto == existenciaCarrito.producto)
        arrayCarrito[posicion].subeCantidad()
        localStorage.setItem("cart", arrayCarrito)
    }

    else{
        const enviarAlCarrito = new objCarrito(prod, 1)
        arrayCarrito.push(enviarAlCarrito)
        localStorage.setItem("cart", arrayCarrito)
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        })
    }

}

renderBootStrap()

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', () => console.log("Actualizando el carrito"));
});




