let cart = [];

function addToCart(name, image) {
    // Guardar el producto y su imagen en el carrito
    cart.push({ name: name, image: image });
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Limpia la lista de la cesta

    cart.forEach(function (item, index) {
        const li = document.createElement('li');
        
        // Crear el contenedor para el nombre y la imagen
        const productInfo = document.createElement('div');
        productInfo.style.display = 'flex';
        productInfo.style.alignItems = 'center';

        // Crear la imagen
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.width = '50px';  // Ajusta el tamaño de la imagen
        img.style.height = '50px';
        img.style.marginRight = '10px';

        // Crear el nombre del producto
        const name = document.createElement('span');
        name.textContent = item.name;

        // Añadir imagen y nombre al contenedor
        productInfo.appendChild(img);
        productInfo.appendChild(name);
        li.appendChild(productInfo);

        // Crear el botón de eliminar
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = function() {
            removeItemFromCart(index);
        };
        li.appendChild(removeButton);

        // Añadir el producto a la lista
        cartItemsList.appendChild(li);
    });
}

function removeItemFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
