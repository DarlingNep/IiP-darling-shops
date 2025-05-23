// Данные товаров
const products = {
    men: [
        { id: 1, title: "Футболка Miami Bape", price: 1299, image: "images/men/Футболка MIami Bape.jpg", category: "shirts" },
        { id: 2, title: "Зипка Ralph Lauren", price: 3499, image: "images/men/Зипка Ralph Lauren.jpg", category: "outerwear" },
        { id: 3, title: "Рубашка Lyle Scott", price: 3199, image: "images/men/Рубашка Lyle Scott.jpg", category: "shirts" },
        { id: 4, title: "Куртка C.P Company", price: 5999, image: "images/men/Куртка C.P Company.jpg", category: "outerwear" },
        { id: 5, title: "Футболка True Religion", price: 1799, image: "images/men/Футболка True Religion.jpg", category: "shirts" },
        { id: 6, title: "Джинсы Big Boy", price: 2999, image: "images/men/Джинсы Big Boy.jpg", category: "pants" },
        { id: 7, title: "Лонгслив Fight Club", price: 3299, image: "images/men/Лонгслив Fight Club.jpg", category: "shirts" },
        { id: 8, title: "Пальто Stone Island", price: 7999, image: "images/men/Пальто Stone Island.jpg", category: "outerwear" },
        { id: 9, title: "Шорты Dime", price: 1999, image: "images/men/Шорты Dime.jpg", category: "pants" },
        { id: 10, title: "Худи Maison Marjelo", price: 4999, image: "images/men/Худи Maison Marjelo.jpg", category: "outerwear" },
        { id: 11, title: "Пиджак Stone Island", price: 4999, image: "images/men/Пиджак Stone Island.jpg", category: "outerwear" },
        { id: 12, title: "Джинсы скинни Amiri", price: 3799, image: "images/men/Джинсы скинни Amiri.jpg", category: "pants" }
       
    ],
    women: [
        { id: 13, title: "Платье Bonprix", price: 2499, image: "images/women/Платье Bonprix.jpg", category: "dresses" },
        { id: 14, title: "Блузка Oodji", price: 1799, image: "images/women/Блузка Oodji.jpg", category: "tops" },
        { id: 15, title: "Юбка Tadaski", price: 2199, image: "images/women/Юбка Tadaski.jpg", category: "pants" },
        { id: 16, title: "Пальто Barberry", price: 6999, image: "images/women/Пальто Barberry.jpg", category: "outerwear" },
        { id: 17, title: "Топ Nike", price: 1299, image: "images/women/Топ Nike.jpg", category: "tops" },
        { id: 18, title: "Свитшот Kappa", price: 3299, image: "images/women/Свитшот Kappa.jpg", category: "outerwear" },
        { id: 19, title: "Кардиган Trussardi", price: 2799, image: "images/women/Кардиган Trussardi.jpg", category: "outerwear" },
        { id: 20, title: "Сарафан  Alexandr", price: 1999, image: "images/women/Сарафан  Alexandr.jpg", category: "dresses" },
        { id: 21, title: "Брюки Premier", price: 2599, image: "images/women/Брюки Premier.jpeg", category: "pants" },
        { id: 22, title: "Куртка MiuMiu", price: 5499, image: "images/women/Куртка MiuMiu.jpg", category: "outerwear" },
        { id: 23, title: "Платье вечернее Prabal", price: 4999, image: "images/women/Платье вечернее Prabal.jpg", category: "dresses" },
        { id: 24, title: "Жакет Oodji", price: 3799, image: "images/women/Жакет Oodji.jpg", category: "outerwear" }
    ],
    accessories: [
        { id: 25, title: "Ремень LV", price: 1999, image: "images/accessories/Ремень LV.jpg", category: "belts" },
        { id: 26, title: "Сумка AMIRI", price: 3499, image: "images/accessories/Сумка AMIRI.jpg", category: "bags" },
        { id: 27, title: "Шарф ФК Спартак", price: 1699, image: "images/accessories/Шарф ФК Спартак.jpg", category: "hats" },
        { id: 28, title: "Кепка Burberry", price: 1599, image: "images/accessories/Кепка Burberry.jpg", category: "hats" },
        { id: 29, title: "Серьги GRAFF", price: 3599, image: "images/accessories/Серьги GRAFF.jpg", category: "jewelry" },
        { id: 30, title: "Рюкзак LV Trio", price: 4999, image: "images/accessories/Рюкзак LV Trio.jpg", category: "bags" },
        { id: 31, title: "Кольцо Cartier", price: 2299, image: "images/accessories/Кольцо Cartier.jpg", category: "jewelry" },
        { id: 32, title: "Панама Patagonia", price: 1499, image: "images/accessories/Панама Patagonia.jpg", category: "hats" },
        { id: 33, title: "Портмоне LV", price: 1799, image: "images/accessories/Портмоне LV.jpg", category: "bags" },
        { id: 34, title: "Браслет Chrome Hearts", price: 1999, image: "images/accessories/Браслет Chrome Hearts.jpg", category: "jewelry" },
        { id: 35, title: "Часы Casio", price: 3299, image: "images/accessories/Часы Casio.jpg", category: "jewelry" },
        { id: 36, title: "Очки Ray Ban", price: 2499, image: "images/accessories/Очки Ray Ban.jpg", category: "hats" }
    ]
};

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM элементы
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const cartModal = document.getElementById('cart-modal');
const closeButtons = document.querySelectorAll('.close');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.querySelector('.cart-count');
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка товаров на главной странице
    if (document.querySelector('.products-grid') && !document.getElementById('men-products')) {
        loadFeaturedProducts();
    }
    
    // Загрузка товаров для мужской одежды
    if (document.getElementById('men-products')) {
        loadProducts('men');
    }
    
    // Загрузка товаров для женской одежды
    if (document.getElementById('women-products')) {
        loadProducts('women');
    }
    
    // Загрузка товаров для аксессуаров
    if (document.getElementById('accessories-products')) {
        loadProducts('accessories');
    }
    
    // Загрузка товаров в корзине
    if (document.getElementById('cart-items')) {
        loadCartItems();
        updateCartSummary();
    }
    
    updateCartCount();
    
    // Обработчики событий для фильтров
    const sortBy = document.getElementById('sort-by');
    const filterBy = document.getElementById('filter-by');
    
    if (sortBy) {
        sortBy.addEventListener('change', function() {
            const category = window.location.pathname.includes('women') ? 'women' : 
                           window.location.pathname.includes('accessories') ? 'accessories' : 'men';
            loadProducts(category);
        });
    }
    
    if (filterBy) {
        filterBy.addEventListener('change', function() {
            const category = window.location.pathname.includes('women') ? 'women' : 
                           window.location.pathname.includes('accessories') ? 'accessories' : 'men';
            loadProducts(category);
        });
    }
});

// Загрузка избранных товаров на главной странице
function loadFeaturedProducts() {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    // Смешиваем товары из всех категорий
    const featuredProducts = [...products.men.slice(0, 4), ...products.women.slice(0, 4), ...products.accessories.slice(0, 4)];
    
    // Перемешиваем
    featuredProducts.sort(() => Math.random() - 0.5);
    
    // Берем первые 8
    const selectedProducts = featuredProducts.slice(0, 8);
    
    selectedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price.toLocaleString()} ₽</p>
                <button class="add-to-cart" data-id="${product.id}">Добавить в корзину</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Добавляем обработчики событий для кнопок "Добавить в корзину"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Загрузка товаров для категории
function loadProducts(category) {
    const productsGrid = document.getElementById(`${category}-products`) || document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    // Получаем выбранные фильтры
    const sortBy = document.getElementById('sort-by') ? document.getElementById('sort-by').value : 'price-asc';
    const filterBy = document.getElementById('filter-by') ? document.getElementById('filter-by').value : 'all';
    
    // Фильтруем и сортируем товары
    let filteredProducts = [...products[category]];
    
    if (filterBy !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === filterBy);
    }
    
    switch (sortBy) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            // Здесь можно добавить логику сортировки по популярности
            filteredProducts.sort(() => Math.random() - 0.5);
            break;
    }
    
    // Отображаем товары
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price.toLocaleString()} ₽</p>
                <button class="add-to-cart" data-id="${product.id}">Добавить в корзину</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Добавляем обработчики событий для кнопок "Добавить в корзину"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Добавление товара в корзину
function addToCart(productId) {
    // Находим товар во всех категориях
    let product = null;
    let category = null;
    
    for (const cat in products) {
        const foundProduct = products[cat].find(p => p.id === productId);
        if (foundProduct) {
            product = foundProduct;
            category = cat;
            break;
        }
    }
    
    if (!product) return;
    
    // Проверяем, есть ли товар уже в корзине
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            category: category,
            quantity: 1
        });
    }
    
    // Сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Обновляем счетчик корзины
    updateCartCount();
    
    // Показываем уведомление
    alert(`Товар "${product.title}" добавлен в корзину!`);
}

// Обновление счетчика корзины
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Загрузка товаров в корзину
function loadCartItems() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Ваша корзина пуста</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.title}</h3>
                <p class="cart-item-price">${item.price.toLocaleString()} ₽</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <p class="remove-item" data-id="${item.id}">Удалить</p>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Добавляем обработчики событий для кнопок изменения количества
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });
    
    // Добавляем обработчики событий для кнопок удаления
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Обновление количества товара в корзине
function updateCartItemQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        // Если количество стало 0 или меньше, удаляем товар
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        // Сохраняем изменения
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Обновляем отображение
        updateCartCount();
        
        if (document.getElementById('cart-items')) {
            loadCartItems();
            updateCartSummary();
        }
    }
}

// Удаление товара из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    if (document.getElementById('cart-items')) {
        loadCartItems();
        updateCartSummary();
    }
}

// Обновление итоговой суммы в корзине
function updateCartSummary() {
    const itemsCount = cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const delivery = subtotal > 5000 ? 0 : 500; // Бесплатная доставка от 5000 ₽
    const total = subtotal + delivery;
    
    if (document.getElementById('items-count')) {
        document.getElementById('items-count').textContent = itemsCount;
        document.getElementById('subtotal-price').textContent = subtotal.toLocaleString();
        document.getElementById('delivery-price').textContent = delivery.toLocaleString();
        document.getElementById('total-price').textContent = total.toLocaleString();
    }
    
    if (totalPriceElement) {
        totalPriceElement.textContent = total.toLocaleString();
    }
}

// Обработчики событий для модальных окон
loginBtn?.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

registerBtn?.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

cartIcon?.addEventListener('click', () => {
    if (window.location.pathname.includes('cart.html')) {
        window.location.reload();
    } else {
        cartModal.style.display = 'flex';
        loadCartItems();
        updateCartSummary();
    }
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Обработчик оформления заказа
checkoutBtn?.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Ваша корзина пуста!');
        return;
    }
    
    window.location.href = 'cart.html';
});

// Обработчик формы оформления заказа
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь можно добавить логику обработки заказа
        alert('Ваш заказ успешно оформлен! Спасибо за покупку!');
        
        // Очищаем корзину
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Перенаправляем на главную страницу
        window.location.href = 'index.html';
    });
}
