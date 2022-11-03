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
    let cardContainer = document.querySelector(".catProductos");
    for (elem of productos){
        let card = document.createElement("div")

        card.innerHTML = 
        `<div class="card" style="width: 18rem;">
            <img src="./media/${elem.imagen}" class="card-img-top" alt="imagen de ${elem.tipo} de ${elem.nombre}">
            <div class="card-body">
                <h5 class="card-title">${elem.tipo} de ${elem.nombre}</h5>
                <p class="card-text">${elem.descripcion}</p>
                <h3 class="card-precio">$${elem.precio}</h3><h4>MXN</h4>
                <input type="button" onClick="agregarCarrito(${elem.id})" href="#" class="btn btn-secondary addToCart" value="Comprar">
            </div>
        </div>`
        cardContainer.appendChild(card)
}
}


//CARRITO
const arrayCarrito = [ ]

//Agregar producto adicional
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

// Agregar un producto al carrito
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

//creaer render de tarjetas bootstrap
renderBootStrap()

// Funcionalidad del carrito
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked, () => console.log("Actualizando el carrito"));
});

const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
);

function addToCartClicked(event){
    const button = event.target;
    const item = button.closest('.card');

    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.card-precio').textContent;
    const itemImage = item.querySelector('.card-img-top').src;
    console.log("Actualizando el carrito")
    console.log( itemTitle, itemPrice)


    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

//Render Carrito
function crearCartHeader(){
    let shoppingCartHeader = document.querySelector(".shoppingCartHeader");
    shoppingCartHeader.innerHTML = `<h1 class="text-center">Carrito de compras</h1>
            <hr>
            <div class="row">
                <div class="col-6">
                    <div class="shopping-cart-header">
                        <h6>Producto</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="shopping-cart-header">
                        <h6 class="text-truncate">Precio</h6>
                    </div>
                </div>
                <div class="col-4">
                    <div class="shopping-cart-header">
                        <h6>Cantidad</h6>
                    </div>
                </div>
            </div>`;
    
    }
    
    crearCartHeader()

//Mostrando productos en el carrito
    function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
        const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
        'shoppingCartItemTitle'
        );
        for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
            let elementQuantity = elementsTitle[
            i
            ].parentElement.parentElement.parentElement.querySelector(
            '.shoppingCartItemQuantity'
            );
            elementQuantity.value++;
            $('.toast').toast('show');
            updateShoppingCartTotal();
            return;
            }
        }

        const shoppingCartRow = document.createElement('div');
        const shoppingCartContent = `
        <div class="row shoppingCartItem">
            <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src=${itemImage} class="shopping-cart-image">
                    <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                </div>
            </div>
            <div class="col-4">
                <div
                    class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                        value="1">
                    <button class="btn btn-danger buttonDelete" type="button">X</button>
                </div>
            </div>
        </div>`;
        shoppingCartRow.innerHTML = shoppingCartContent;
        shoppingCartItemsContainer.append(shoppingCartRow);
        
        shoppingCartRow
        .querySelector('.buttonDelete')
        .addEventListener('click', removeShoppingCartItem);
        
        shoppingCartRow
        .querySelector('.shoppingCartItemQuantity')
        .addEventListener('change', quantityChanged);
        
        updateShoppingCartTotal();
    }


    function updateShoppingCartTotal() {
        let total = 0;
        const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
        
        const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
        
        shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shoppingCartItemPrice'
        );
        const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('$', '')
        );
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            '.shoppingCartItemQuantity'
        );
        const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
        );
          total = parseFloat(total) + parseFloat(shoppingCartItemPrice) * parseFloat(shoppingCartItemQuantity);
        });
        shoppingCartTotal.innerHTML = `$${total.toFixed(2)} MXN`;
        console.log(total)
    }

    function removeShoppingCartItem(event) {
        const buttonClicked = event.target;
        buttonClicked.closest('.shoppingCartItem').remove();
        updateShoppingCartTotal();
    }
    
    function quantityChanged(event) {
        const input = event.target;
        input.value <= 0 ? (input.value = 1) : null;
        updateShoppingCartTotal();
    }
    
    function comprarButtonClicked() {
        shoppingCartItemsContainer.innerHTML = '';
        updateShoppingCartTotal();
    }