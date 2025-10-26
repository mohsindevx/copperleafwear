// ====================================
// Product Data - 25 Products
// ====================================
const products = [
    {
        id: 1,
        name: "Elegant Silk Evening Dress",
        category: "dresses",
        price: 189.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
        rating: 5,
        reviews: 124,
        description: "Luxurious silk evening dress perfect for formal occasions. Features a flattering A-line silhouette with delicate embroidery details and a flowing skirt that moves beautifully.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "red", "blue"],
        featured: true,
        badge: "sale",
        details: ["100% Pure Silk", "Hand-wash only", "Made in Italy", "Concealed back zipper"]
    },
    {
        id: 2,
        name: "Classic White Cotton Blouse",
        category: "tops",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80",
        rating: 4.5,
        reviews: 89,
        description: "Timeless white cotton blouse with button-down front and structured collar. Perfect for office wear or casual outings. Breathable fabric ensures all-day comfort.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["white"],
        featured: true,
        badge: "new",
        details: ["100% Cotton", "Machine washable", "Wrinkle-resistant", "Classic collar"]
    },
    {
        id: 3,
        name: "Camel Wool Trench Coat",
        category: "outerwear",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
        rating: 5,
        reviews: 156,
        description: "Premium wool trench coat in classic camel color. Double-breasted design with belt waist and spacious pockets. A wardrobe essential that never goes out of style.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["beige"],
        featured: true,
        details: ["80% Wool, 20% Polyester", "Dry clean only", "Belted waist", "Two side pockets"]
    },
    {
        id: 4,
        name: "Leather Crossbody Bag",
        category: "accessories",
        price: 129.99,
        originalPrice: 179.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
        rating: 4.8,
        reviews: 203,
        description: "Premium leather crossbody bag with adjustable strap. Features multiple compartments for organization. Perfect size for daily essentials with elegant gold-tone hardware.",
        sizes: ["One Size"],
        colors: ["black", "beige"],
        featured: true,
        badge: "sale",
        details: ["Genuine Leather", "Adjustable strap", "Multiple compartments", "Gold-tone hardware"]
    },
    {
        id: 5,
        name: "Floral Print Midi Dress",
        category: "dresses",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
        rating: 4.6,
        reviews: 78,
        description: "Beautiful floral print midi dress with wrap-style bodice and flowing skirt. Perfect for spring and summer occasions. Features adjustable tie waist for a customized fit.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["blue", "green", "red"],
        featured: false,
        details: ["Polyester blend", "Machine washable", "Wrap-style design", "Tie waist"]
    },
    {
        id: 6,
        name: "Cashmere Turtleneck Sweater",
        category: "tops",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80",
        rating: 5,
        reviews: 142,
        description: "Luxuriously soft cashmere turtleneck sweater. Lightweight yet warm, perfect for layering or wearing alone. Timeless design in versatile neutral colors.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["beige", "black", "white"],
        featured: true,
        badge: "new",
        details: ["100% Cashmere", "Hand-wash only", "Ribbed cuffs", "Relaxed fit"]
    },
    {
        id: 7,
        name: "High-Waisted Wide Leg Pants",
        category: "pants",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
        rating: 4.7,
        reviews: 95,
        description: "Sophisticated high-waisted wide leg pants with side zip closure. Tailored fit through the hips with a dramatic wide leg. Dress them up or down for any occasion.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "beige", "white"],
        featured: false,
        details: ["Polyester blend", "Side zip closure", "Dry clean recommended", "High-waisted design"]
    },
    {
        id: 8,
        name: "Satin Slip Dress",
        category: "dresses",
        price: 119.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80",
        rating: 4.9,
        reviews: 167,
        description: "Elegant satin slip dress with delicate spaghetti straps. Bias-cut design creates a beautiful drape. Perfect for evening events or dressed down with a cardigan.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["black", "red", "green"],
        featured: true,
        badge: "sale",
        details: ["Satin finish", "Adjustable straps", "Bias-cut design", "Midi length"]
    },
    {
        id: 9,
        name: "Denim Jacket",
        category: "outerwear",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
        rating: 4.5,
        reviews: 134,
        description: "Classic denim jacket with vintage wash. Features button closure, chest pockets, and slightly cropped length. A versatile piece that pairs with everything.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["blue"],
        featured: false,
        details: ["100% Cotton denim", "Machine washable", "Button closure", "Classic fit"]
    },
    {
        id: 10,
        name: "Silk Scarf",
        category: "accessories",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80",
        rating: 4.8,
        reviews: 89,
        description: "Luxurious silk scarf with artistic print. Can be worn around the neck, as a hair accessory, or tied to a bag. Adds a touch of elegance to any outfit.",
        sizes: ["One Size"],
        colors: ["blue", "red", "green"],
        featured: false,
        details: ["100% Silk", "Hand-wash only", "Large square design", "Rolled edges"]
    },
    {
        id: 11,
        name: "Pleated Midi Skirt",
        category: "pants",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
        rating: 4.6,
        reviews: 112,
        description: "Elegant pleated midi skirt with elastic waistband. The pleats create beautiful movement and a flattering silhouette. Perfect for both professional and casual settings.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "beige", "blue"],
        featured: false,
        details: ["Polyester blend", "Elastic waistband", "Pleated design", "Midi length"]
    },
    {
        id: 12,
        name: "Ribbed Knit Cardigan",
        category: "tops",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
        rating: 4.7,
        reviews: 98,
        description: "Cozy ribbed knit cardigan with button-down front. Relaxed fit with drop shoulders for a contemporary look. Perfect for layering year-round.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["beige", "black", "white"],
        featured: false,
        details: ["Cotton blend", "Machine washable", "Button-down front", "Ribbed texture"]
    },
    {
        id: 13,
        name: "Lace Cocktail Dress",
        category: "dresses",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
        rating: 4.9,
        reviews: 145,
        description: "Stunning lace cocktail dress with fitted bodice and flared skirt. Intricate lace overlay creates an elegant, sophisticated look. Perfect for special occasions.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "white", "red"],
        featured: false,
        badge: "new",
        details: ["Lace overlay", "Fitted bodice", "Hidden back zipper", "Fully lined"]
    },
    {
        id: 14,
        name: "Leather Ankle Boots",
        category: "accessories",
        price: 179.99,
        originalPrice: 229.99,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80",
        rating: 4.8,
        reviews: 187,
        description: "Premium leather ankle boots with block heel. Side zip closure for easy on and off. Versatile design that works with jeans, dresses, or skirts.",
        sizes: ["6", "7", "8", "9", "10"],
        colors: ["black", "beige"],
        featured: true,
        badge: "sale",
        details: ["Genuine leather", "Block heel", "Side zip", "Cushioned insole"]
    },
    {
        id: 15,
        name: "Striped Linen Shirt",
        category: "tops",
        price: 64.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
        rating: 4.5,
        reviews: 76,
        description: "Breathable linen shirt with classic stripe pattern. Relaxed fit with button-down front. Perfect for warm weather with its lightweight, airy fabric.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["blue", "white"],
        featured: false,
        details: ["100% Linen", "Machine washable", "Classic collar", "Breathable fabric"]
    },
    {
        id: 16,
        name: "Wool Blend Peacoat",
        category: "outerwear",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&q=80",
        rating: 5,
        reviews: 201,
        description: "Classic double-breasted peacoat in premium wool blend. Features notched lapels and large buttons. A timeless piece that provides warmth and style.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "beige"],
        featured: true,
        details: ["Wool blend", "Double-breasted", "Notched lapels", "Side pockets"]
    },
    {
        id: 17,
        name: "Velvet Wrap Dress",
        category: "dresses",
        price: 139.99,
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80",
        rating: 4.7,
        reviews: 93,
        description: "Luxurious velvet wrap dress with three-quarter sleeves. The wrap design flatters all body types. Perfect for holiday parties and evening events.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "green", "red"],
        featured: false,
        details: ["Velvet fabric", "Wrap design", "3/4 sleeves", "Tie waist"]
    },
    {
        id: 18,
        name: "Leather Belt",
        category: "accessories",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
        rating: 4.6,
        reviews: 142,
        description: "Classic leather belt with gold-tone buckle. Quality construction ensures longevity. Available in multiple widths to suit your style needs.",
        sizes: ["S", "M", "L"],
        colors: ["black", "beige"],
        featured: false,
        details: ["Genuine leather", "Gold-tone buckle", "Multiple holes", "Classic design"]
    },
    {
        id: 19,
        name: "Tailored Blazer",
        category: "outerwear",
        price: 169.99,
        image: "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=600&q=80",
        rating: 4.9,
        reviews: 178,
        description: "Perfectly tailored blazer with notched lapels and single-button closure. Structured shoulders create a polished silhouette. Essential for professional wardrobes.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "beige", "blue"],
        featured: true,
        badge: "new",
        details: ["Structured fit", "Single button", "Notched lapels", "Interior pockets"]
    },
    {
        id: 20,
        name: "Chiffon Blouse",
        category: "tops",
        price: 74.99,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
        rating: 4.6,
        reviews: 87,
        description: "Elegant chiffon blouse with subtle sheen. Features a keyhole neckline and button cuffs. Pairs beautifully with dress pants or skirts for a refined look.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["white", "black", "blue"],
        featured: false,
        details: ["Chiffon fabric", "Keyhole neckline", "Button cuffs", "Flowy fit"]
    },
    {
        id: 21,
        name: "Pencil Skirt",
        category: "pants",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
        rating: 4.5,
        reviews: 104,
        description: "Classic pencil skirt with back slit for ease of movement. High-waisted design creates a flattering silhouette. A wardrobe staple for professional settings.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "beige"],
        featured: false,
        details: ["Stretch fabric", "Back slit", "High-waisted", "Side zipper"]
    },
    {
        id: 22,
        name: "Statement Earrings",
        category: "accessories",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
        rating: 4.7,
        reviews: 156,
        description: "Bold statement earrings that elevate any outfit. Lightweight design ensures comfortable all-day wear. Perfect for adding a touch of glamour to your look.",
        sizes: ["One Size"],
        colors: ["gold", "silver"],
        featured: false,
        details: ["Lightweight", "Hypoallergenic", "Gold-tone finish", "Statement design"]
    },
    {
        id: 23,
        name: "Maxi Dress",
        category: "dresses",
        price: 109.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
        rating: 4.8,
        reviews: 129,
        description: "Flowing maxi dress with empire waist and delicate print. Adjustable straps ensure perfect fit. Ideal for summer events and beachside occasions.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["blue", "green"],
        featured: true,
        badge: "sale",
        details: ["Lightweight fabric", "Empire waist", "Adjustable straps", "Lined"]
    },
    {
        id: 24,
        name: "Oversized Sunglasses",
        category: "accessories",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
        rating: 4.9,
        reviews: 213,
        description: "Chic oversized sunglasses with UV protection. Designer-inspired frames with premium lenses. A must-have accessory for sunny days and glamorous looks.",
        sizes: ["One Size"],
        colors: ["black", "beige"],
        featured: false,
        badge: "new",
        details: ["UV protection", "Polarized lenses", "Designer-inspired", "Protective case included"]
    },
    {
        id: 25,
        name: "Cropped Denim Pants",
        category: "pants",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
        rating: 4.6,
        reviews: 98,
        description: "Modern cropped denim pants with raw hem detail. High-rise fit with straight leg silhouette. Perfect for showcasing your favorite shoes.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["blue", "black"],
        featured: false,
        details: ["Stretch denim", "High-rise", "Raw hem", "5-pocket styling"]
    }
];

// ====================================
// State Management
// ====================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentSlide = 0;
let slideInterval;

// ====================================
// Initialize App
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initHeroSlider();
    initCart();
    initModals();
    initForms();
    initScrollEffects();
    
    // Load products based on current page
    if (window.location.pathname.includes('shop.html')) {
        initShopPage();
    } else {
        loadFeaturedProducts();
    }
    
    updateCartCount();
});

// ====================================
// Navigation
// ====================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
}

// ====================================
// Hero Slider
// ====================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.querySelector('.hero-dots');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    
    if (!slides.length) return;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        document.querySelectorAll('.hero-dot').forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        document.querySelectorAll('.hero-dot')[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function goToSlide(index) {
        showSlide(index);
        resetInterval();
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
    
    // Auto-play
    slideInterval = setInterval(nextSlide, 5000);
}

// ====================================
// Product Display
// ====================================
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featuredProducts = products.filter(p => p.featured).slice(0, 8);
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    attachProductListeners();
}

function createProductCard(product) {
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn quick-view-btn" data-id="${product.id}" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn add-to-cart-icon" data-id="${product.id}" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = Math.ceil(rating); i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function attachProductListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn, .add-to-cart-icon').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            addToCart(productId);
        });
    });
    
    // Quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            openProductModal(productId);
        });
    });
    
    // Product card click
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.dataset.id);
            openProductModal(productId);
        });
    });
}

// ====================================
// Shop Page
// ====================================
function initShopPage() {
    let filteredProducts = [...products];
    
    const productsGrid = document.getElementById('productsGrid');
    const sortSelect = document.getElementById('sortSelect');
    const filterInputs = document.querySelectorAll('.filter-option input');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const filterToggle = document.getElementById('filterToggle');
    const filters = document.getElementById('filters');
    
    // Load all products initially
    displayProducts(filteredProducts);
    
    // Filter toggle for mobile
    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            filters.classList.toggle('show');
        });
    }
    
    // Filter functionality
    function applyFilters() {
        filteredProducts = products.filter(product => {
            // Category filter
            const categoryFilters = Array.from(document.querySelectorAll('input[name="category"]:checked'))
                .map(input => input.value);
            if (categoryFilters.length > 0 && !categoryFilters.includes('all')) {
                if (!categoryFilters.includes(product.category)) return false;
            }
            
            // Price filter
            const priceFilters = Array.from(document.querySelectorAll('input[name="price"]:checked'))
                .map(input => input.value);
            if (priceFilters.length > 0) {
                const inPriceRange = priceFilters.some(range => {
                    if (range === '0-50') return product.price < 50;
                    if (range === '50-100') return product.price >= 50 && product.price < 100;
                    if (range === '100-150') return product.price >= 100 && product.price < 150;
                    if (range === '150-200') return product.price >= 150 && product.price < 200;
                    if (range === '200+') return product.price >= 200;
                    return false;
                });
                if (!inPriceRange) return false;
            }
            
            // Size filter
            const sizeFilters = Array.from(document.querySelectorAll('input[name="size"]:checked'))
                .map(input => input.value);
            if (sizeFilters.length > 0) {
                const hasSize = sizeFilters.some(size => product.sizes.includes(size));
                if (!hasSize) return false;
            }
            
            // Color filter
            const colorFilters = Array.from(document.querySelectorAll('input[name="color"]:checked'))
                .map(input => input.value);
            if (colorFilters.length > 0) {
                const hasColor = colorFilters.some(color => product.colors.includes(color));
                if (!hasColor) return false;
            }
            
            return true;
        });
        
        applySorting();
        displayProducts(filteredProducts);
    }
    
    function applySorting() {
        const sortValue = sortSelect.value;
        
        switch(sortValue) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-az':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-za':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            default:
                // featured - use original order
                break;
        }
    }
    
    function displayProducts(productsToShow) {
        const resultsCount = document.getElementById('resultsCount');
        const noResults = document.getElementById('noResults');
        
        if (productsToShow.length === 0) {
            productsGrid.style.display = 'none';
            noResults.style.display = 'block';
            resultsCount.textContent = '0 Products';
        } else {
            productsGrid.style.display = 'grid';
            noResults.style.display = 'none';
            resultsCount.textContent = `${productsToShow.length} Product${productsToShow.length !== 1 ? 's' : ''}`;
            productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
            attachProductListeners();
        }
    }
    
    // Event listeners
    filterInputs.forEach(input => {
        input.addEventListener('change', applyFilters);
    });
    
    sortSelect.addEventListener('change', () => {
        applySorting();
        displayProducts(filteredProducts);
    });
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            filterInputs.forEach(input => {
                if (input.value === 'all') {
                    input.checked = true;
                } else {
                    input.checked = false;
                }
            });
            applyFilters();
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            filterInputs.forEach(input => input.checked = false);
            applyFilters();
        });
    }
    
    // Check URL parameters for category filter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        document.querySelectorAll('input[name="category"]').forEach(input => {
            input.checked = input.value === categoryParam;
        });
        applyFilters();
    }
}

// ====================================
// Shopping Cart
// ====================================
function initCart() {
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartModal = document.getElementById('cartModal');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            openCart();
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });
    }
    
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('show');
            }
        });
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartDisplay();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function openCart() {
    const cartModal = document.getElementById('cartModal');
    updateCartDisplay();
    cartModal.classList.add('show');
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// ====================================
// Product Modal
// ====================================
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const content = document.getElementById('productModalContent');
    
    content.innerHTML = `
        <div class="product-modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-modal-details">
            <div class="product-modal-category">${product.category}</div>
            <h2>${product.name}</h2>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-count">(${product.reviews} reviews)</span>
            </div>
            <div class="product-modal-price">$${product.price.toFixed(2)}</div>
            <p class="product-modal-description">${product.description}</p>
            
            <div class="product-modal-specs">
                <h4>Details:</h4>
                <ul>
                    ${product.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
            
            <div class="product-options">
                ${product.sizes.length > 1 ? `
                    <div class="option-group">
                        <label>Size:</label>
                        <div class="size-buttons">
                            ${product.sizes.map((size, idx) => 
                                `<button class="option-btn ${idx === 0 ? 'selected' : ''}">${size}</button>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${product.colors.length > 1 ? `
                    <div class="option-group">
                        <label>Color:</label>
                        <div class="color-buttons">
                            ${product.colors.map((color, idx) => 
                                `<button class="option-btn ${idx === 0 ? 'selected' : ''}">${color}</button>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
            
            <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}); closeProductModal();">
                Add to Cart - $${product.price.toFixed(2)}
            </button>
        </div>
    `;
    
    // Option button selection
    content.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    modal.classList.add('show');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
}

// ====================================
// Search Functionality
// ====================================
function initModals() {
    const searchBtn = document.querySelector('.search-btn');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const productModal = document.getElementById('productModal');
    const closeProductModal = document.getElementById('closeProductModal');
    
    // Search modal
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.add('show');
            searchInput.focus();
        });
    }
    
    if (closeSearch) {
        closeSearch.addEventListener('click', () => {
            searchModal.classList.remove('show');
            searchInput.value = '';
            searchResults.innerHTML = '';
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            
            const results = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
            ).slice(0, 8);
            
            if (results.length === 0) {
                searchResults.innerHTML = '<p style="padding: 20px; text-align: center; color: #999;">No products found</p>';
                return;
            }
            
            searchResults.innerHTML = results.map(product => `
                <div class="search-result-item" data-id="${product.id}">
                    <div class="search-result-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <p>$${product.price.toFixed(2)} • ${product.category}</p>
                    </div>
                </div>
            `).join('');
            
            // Add click listeners to search results
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const productId = parseInt(item.dataset.id);
                    searchModal.classList.remove('show');
                    openProductModal(productId);
                });
            });
        });
    }
    
    // Product modal close
    if (closeProductModal) {
        closeProductModal.addEventListener('click', () => {
            productModal.classList.remove('show');
        });
    }
    
    // Close modals on outside click
    [searchModal, productModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                }
            });
        }
    });
    
    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(modal => {
                modal.classList.remove('show');
            });
        }
    });
}

// ====================================
// Forms
// ====================================
function initForms() {
    const newsletterForm = document.getElementById('newsletterForm');
    const contactForm = document.getElementById('contactForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            showNotification('Thank you for subscribing!');
            newsletterForm.reset();
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Message sent successfully! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }
}

// ====================================
// Scroll Effects
// ====================================
function initScrollEffects() {
    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ====================================
// Notifications
// ====================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #28A745;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

