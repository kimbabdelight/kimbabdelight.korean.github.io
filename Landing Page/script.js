let cart = [];
let total = 0;

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartItems.appendChild(listItem);

        // Harga masing-masing item bisa ditambahkan dan dihitung di sini
        total += 20; // Harga fiktif
    });

    totalPrice.textContent = 'Rp ' + total;
}

function checkout() {
    alert('Pesanan Anda berhasil! Total: Rp ' + total);
    // Proses pembayaran atau pemesanan selanjutnya dapat ditambahkan di sini
    // Misalnya, pengiriman pesanan atau pengalihan ke halaman pembayaran
}
