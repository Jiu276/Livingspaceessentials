// Initialize products page
let filteredProducts = [...allProducts];
let activeFilters = {
    categories: [],
    priceRange: null,
    minRating: 0
};

// Display products
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (products.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: var(--text-gray);">No products found matching your criteria.</p>';
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-detail-card" onclick="viewProductDetails(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            <div class="product-info">
                <span class="product-category-badge">${product.category}</span>
                <h3 class="product-detail-name">${product.name}</h3>
                <div class="product-detail-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    ${product.rating}
                </div>
                <div class="product-detail-price">$${product.price}</div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn-view-details">
                        <i class="fas fa-eye"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts() {
    filteredProducts = allProducts.filter(product => {
        // Category filter
        if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(product.category)) {
            return false;
        }

        // Price filter
        if (activeFilters.priceRange) {
            const [min, max] = activeFilters.priceRange.split('-').map(p => p === '500+' ? Infinity : parseInt(p));
            if (max === undefined) {
                if (product.price < min) return false;
            } else {
                if (product.price < min || product.price > max) return false;
            }
        }

        // Rating filter
        if (activeFilters.minRating && product.rating < activeFilters.minRating) {
            return false;
        }

        return true;
    });

    displayProducts(filteredProducts);
}

// Search products
function searchProducts(query) {
    if (!query) {
        displayProducts(filteredProducts);
        return;
    }

    const searchTerm = query.toLowerCase();
    const searchResults = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    displayProducts(searchResults);
}

// Sort products
function sortProducts(sortBy) {
    let sorted = [...filteredProducts];

    switch (sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    displayProducts(sorted);
}

// View product details
function viewProductDetails(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    showProductModal(product);
}

// Show product modal
function showProductModal(product) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('productModal');
    if (!modal) {
        modal = createProductModal();
    }
    
    // Update modal content
    updateModalContent(product);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Create product modal
function createProductModal() {
    const modalHTML = `
        <div id="productModal" class="product-modal-overlay">
            <div class="product-modal">
                <button class="modal-close" onclick="closeProductModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div id="modalContent"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add CSS link if not already present
    if (!document.querySelector('link[href="product-modal.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'product-modal.css';
        document.head.appendChild(link);
    }
    
    const modal = document.getElementById('productModal');
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    return modal;
}

// Update modal content
function updateModalContent(product) {
    const modalContent = document.getElementById('modalContent');
    
    // Generate additional product details
    const originalPrice = Math.round(product.price * 1.3);
    const savings = Math.round((originalPrice - product.price) / originalPrice * 100);
    
    modalContent.innerHTML = `
        <div class="product-detail-content">
            <div class="product-images">
                <img src="${product.image}" alt="${product.name}" class="main-product-image" id="mainImage">
                <div class="product-thumbnails">
                    <img src="${product.image}" alt="" class="thumbnail active" onclick="changeMainImage(this)">
                    <img src="${product.image.replace('?w=600', '?w=600&h=600')}" alt="" class="thumbnail" onclick="changeMainImage(this)">
                    <img src="${product.image.replace('?w=600', '?w=600&q=90')}" alt="" class="thumbnail" onclick="changeMainImage(this)">
                    <img src="${product.image.replace('?w=600', '?w=600&blur=2')}" alt="" class="thumbnail" onclick="changeMainImage(this)">
                </div>
            </div>
            
            <div class="product-info-section">
                <span class="product-badge">${product.category.toUpperCase()}</span>
                <h2 class="product-modal-title">${product.name}</h2>
                
                <div class="product-modal-rating">
                    <div class="stars">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span class="rating-text">${product.rating} out of 5 (${Math.floor(Math.random() * 200 + 50)} reviews)</span>
                </div>
                
                <div class="product-modal-price">
                    $${product.price}
                    <span class="price-original">$${originalPrice}</span>
                    <span style="color: var(--secondary-color); font-size: 1rem; margin-left: 10px;">Save ${savings}%</span>
                </div>
                
                <p class="product-description-full">
                    ${product.description}
                    Experience the perfect blend of style and functionality with this premium ${product.category} item. 
                    Carefully selected for quality and durability, this product is designed to enhance your living space 
                    while providing exceptional value for money.
                </p>
                
                <div class="product-features">
                    <h3>Key Features</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-check"></i> Premium quality materials</li>
                        <li><i class="fas fa-check"></i> Modern and elegant design</li>
                        <li><i class="fas fa-check"></i> Easy to maintain and clean</li>
                        <li><i class="fas fa-check"></i> Eco-friendly and sustainable</li>
                        <li><i class="fas fa-check"></i> 1-year warranty included</li>
                    </ul>
                </div>
                
                <div class="product-actions-modal">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="updateQuantity(-1)">-</button>
                        <span class="quantity-value" id="quantity">1</span>
                        <button class="quantity-btn" onclick="updateQuantity(1)">+</button>
                    </div>
                    <button class="btn-add-to-cart-modal">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                    <button class="btn-wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                
                <div class="product-specs">
                    <h3>Specifications</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <span class="spec-label">Brand</span>
                            <span class="spec-value">Premium Living</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Material</span>
                            <span class="spec-value">High Quality</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Color</span>
                            <span class="spec-value">As Shown</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Warranty</span>
                            <span class="spec-value">1 Year</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Change main image
function changeMainImage(thumbnail) {
    document.getElementById('mainImage').src = thumbnail.src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Update quantity
function updateQuantity(change) {
    const quantityEl = document.getElementById('quantity');
    let quantity = parseInt(quantityEl.textContent);
    quantity = Math.max(1, quantity + change);
    quantityEl.textContent = quantity;
}

// Add to cart
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        // In a real application, this would add to cart
        alert(`Added "${product.name}" to cart!`);
    }
}

// Initialize filters
document.addEventListener('DOMContentLoaded', () => {
    // Display all products initially
    displayProducts(allProducts);

    // Category filters
    const categoryCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"][value]');
    categoryCheckboxes.forEach(checkbox => {
        if (checkbox.value === '4' || checkbox.value === '3') {
            // Rating filters
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    activeFilters.minRating = parseInt(e.target.value);
                } else {
                    activeFilters.minRating = 0;
                }
                filterProducts();
            });
        } else {
            // Category filters
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    activeFilters.categories.push(e.target.value);
                } else {
                    activeFilters.categories = activeFilters.categories.filter(cat => cat !== e.target.value);
                }
                filterProducts();
            });
        }
    });

    // Price filter
    const priceRadios = document.querySelectorAll('input[name="price"]');
    priceRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            activeFilters.priceRange = e.target.value;
            filterProducts();
        });
    });

    // Apply filters button
    const applyBtn = document.querySelector('.apply-filters-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', filterProducts);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            searchProducts(searchInput.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts(searchInput.value);
            }
        });

        searchInput.addEventListener('input', (e) => {
            if (e.target.value === '') {
                displayProducts(filteredProducts);
            }
        });
    }

    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        const checkbox = document.querySelector(`input[type="checkbox"][value="${category}"]`);
        if (checkbox) {
            checkbox.checked = true;
            activeFilters.categories.push(category);
            filterProducts();
        }
    }
});