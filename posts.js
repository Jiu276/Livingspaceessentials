const posts = [
    {
        id: 1,
        title: "10 Essential Living Room Furniture Pieces for Modern Homes",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
        excerpt: "Transform your living space with these must-have furniture pieces that combine style and functionality. From comfortable sofas to versatile coffee tables, discover what makes a modern living room complete.",
        content: "Creating the perfect living room starts with selecting the right furniture pieces. A comfortable sofa serves as the centerpiece, while accent chairs provide additional seating and style. Coffee tables offer both function and form, and entertainment centers keep your technology organized. Don't forget about storage solutions like ottomans and bookshelves that help maintain a clutter-free space.",
        author: "Sarah Johnson",
        date: "January 15, 2025",
        readTime: "5 min read",
        tags: ["furniture", "living room", "modern design", "home essentials"]
    },
    {
        id: 2,
        title: "Best Kitchen Gadgets of 2025: A Comprehensive Review",
        category: "Kitchen",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
        excerpt: "Discover the latest kitchen innovations that are revolutionizing home cooking. We've tested and reviewed the top gadgets that will make your culinary experience more enjoyable and efficient.",
        content: "The kitchen is the heart of every home, and having the right gadgets can transform your cooking experience. This year's standout products include smart instant pots with AI cooking assistance, precision coffee makers that remember your preferences, and multi-functional food processors that save counter space. We've tested each product for durability, ease of use, and value for money.",
        author: "Michael Chen",
        date: "January 22, 2025",
        readTime: "8 min read",
        tags: ["kitchen", "gadgets", "reviews", "cooking"]
    },
    {
        id: 3,
        title: "Creating a Cozy Bedroom Sanctuary: Design Tips and Product Recommendations",
        category: "Bedroom",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
        excerpt: "Turn your bedroom into a peaceful retreat with our expert design tips and carefully selected product recommendations. Learn how to create the perfect atmosphere for rest and relaxation.",
        content: "Your bedroom should be your personal sanctuary, a place where you can unwind and recharge. Start with quality bedding – invest in breathable sheets, supportive pillows, and a comfortable mattress. Layer textures with throws and cushions for visual interest. Consider blackout curtains for better sleep quality, and add soft lighting options for ambiance. Don't forget about storage solutions that keep your space organized and clutter-free.",
        author: "Emily Watson",
        date: "January 28, 2025",
        readTime: "6 min read",
        tags: ["bedroom", "design", "comfort", "sleep"]
    },
    {
        id: 4,
        title: "Smart Home Lighting: Transform Your Space with Intelligent Illumination",
        category: "Lighting",
        image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600",
        excerpt: "Explore the world of smart lighting and learn how to create the perfect ambiance for every occasion. From color-changing bulbs to voice-controlled systems, discover what's possible.",
        content: "Smart lighting has revolutionized how we illuminate our homes. With Wi-Fi enabled bulbs, you can control brightness, color temperature, and even colors from your smartphone. Set schedules to wake up naturally with gradually increasing light, or create movie night ambiance with a single tap. Integration with voice assistants makes control effortless, while energy-efficient LED technology saves money on electricity bills.",
        author: "David Miller",
        date: "February 5, 2025",
        readTime: "7 min read",
        tags: ["lighting", "smart home", "technology", "energy efficiency"]
    },
    {
        id: 5,
        title: "Minimalist Home Decor: Less is More in 2025",
        category: "Decor",
        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600",
        excerpt: "Embrace the minimalist lifestyle with our guide to decluttering and decorating your home. Learn how to create beautiful, functional spaces with carefully chosen pieces.",
        content: "Minimalism in home decor isn't about having empty spaces – it's about being intentional with what you choose to display. Select pieces that serve both functional and aesthetic purposes. Focus on quality over quantity, choosing items made from natural materials like wood, stone, and linen. Use a neutral color palette as your base, adding personality through texture and carefully chosen accent pieces. Remember, every item should have a purpose or bring you joy.",
        author: "Lisa Anderson",
        date: "February 12, 2025",
        readTime: "5 min read",
        tags: ["minimalism", "decor", "organization", "lifestyle"]
    },
    {
        id: 6,
        title: "Top 5 Online Platforms for Home Essentials Shopping",
        category: "Shopping Guide",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
        excerpt: "Navigate the world of online home shopping with our comprehensive guide to the best platforms. Compare prices, selection, and customer service across top retailers.",
        content: "Online shopping for home essentials has never been easier. Amazon offers unbeatable convenience and Prime delivery, while Wayfair specializes in furniture with excellent visualization tools. Target combines affordability with style, IKEA brings Scandinavian design to the masses, and West Elm caters to those seeking modern, upscale pieces. Each platform has unique strengths – from customer reviews to virtual room planners – helping you make informed decisions.",
        author: "Robert Kim",
        date: "February 18, 2025",
        readTime: "10 min read",
        tags: ["shopping", "online retail", "comparison", "guides"]
    },
    {
        id: 7,
        title: "Sustainable Living: Eco-Friendly Products for Your Home",
        category: "Sustainability",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
        excerpt: "Make your home more environmentally friendly with these sustainable product choices. From bamboo kitchenware to recycled furniture, discover eco-conscious alternatives.",
        content: "Sustainable living starts at home. Choose products made from renewable materials like bamboo, cork, and reclaimed wood. Invest in energy-efficient appliances that reduce your carbon footprint and utility bills. Consider second-hand furniture – vintage pieces add character while keeping items out of landfills. Look for certifications like FSC for wood products and ENERGY STAR for appliances. Small changes in your purchasing habits can make a significant environmental impact.",
        author: "Jennifer Green",
        date: "February 25, 2025",
        readTime: "6 min read",
        tags: ["sustainability", "eco-friendly", "green living", "environment"]
    },
    {
        id: 8,
        title: "Home Office Setup: Essential Products for Remote Workers",
        category: "Office",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600",
        excerpt: "Create a productive home office with our guide to essential furniture and accessories. From ergonomic chairs to cable management solutions, optimize your workspace.",
        content: "A well-designed home office boosts productivity and comfort. Start with an ergonomic chair that supports proper posture during long work sessions. Pair it with an adjustable desk – standing desk converters are great for existing furniture. Good lighting reduces eye strain, while monitor arms create more desk space. Don't forget organization tools like cable management systems, desktop organizers, and filing solutions. Plants and personal touches make the space inviting while maintaining professionalism for video calls.",
        author: "Thomas Wright",
        date: "March 3, 2025",
        readTime: "8 min read",
        tags: ["home office", "productivity", "ergonomics", "remote work"]
    },
    {
        id: 9,
        title: "Spring Cleaning Essentials: Products and Tips for a Fresh Start",
        category: "Cleaning",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
        excerpt: "Get your home ready for spring with our comprehensive cleaning guide. Discover the best products and techniques for deep cleaning every room.",
        content: "Spring cleaning is the perfect opportunity to refresh your living space. Start with decluttering – donate items you haven't used in a year. Invest in quality cleaning supplies: microfiber cloths, a good vacuum with HEPA filtration, and eco-friendly cleaning solutions. Work room by room, tackling often-forgotten areas like baseboards, light fixtures, and window tracks. Consider steam cleaners for deep carpet cleaning and organize as you go with storage solutions that make maintenance easier year-round.",
        author: "Maria Rodriguez",
        date: "March 10, 2025",
        readTime: "7 min read",
        tags: ["cleaning", "organization", "spring", "maintenance"]
    }
];

const featuredProducts = [
    {
        id: 1,
        name: "Modern Sectional Sofa",
        category: "Furniture",
        price: "$1,299",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        rating: 4.5,
        description: "Comfortable L-shaped sectional perfect for family gatherings"
    },
    {
        id: 2,
        name: "Smart LED Floor Lamp",
        category: "Lighting",
        price: "$159",
        image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400",
        rating: 4.8,
        description: "Voice-controlled RGB lamp with app integration"
    },
    {
        id: 3,
        name: "Bamboo Kitchen Set",
        category: "Kitchen",
        price: "$89",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        rating: 4.6,
        description: "Eco-friendly 10-piece cooking utensil set"
    },
    {
        id: 4,
        name: "Minimalist Coffee Table",
        category: "Furniture",
        price: "$349",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        rating: 4.7,
        description: "Scandinavian design with hidden storage compartment"
    }
];

// Function to display posts
function displayPosts(postsToShow = posts.slice(0, 3)) {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;
    
    postsContainer.innerHTML = postsToShow.map(post => `
        <article class="post-card">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <span class="post-category">${post.category}</span>
                <h3 class="post-title" onclick="viewPost(${post.id})">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <a href="article.html?id=${post.id}" class="read-more">Read More →</a>
                </div>
            </div>
        </article>
    `).join('');
}

// Function to display featured products
function displayFeaturedProducts() {
    const productsContainer = document.getElementById('featuredProducts');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                ${product.rating}
            </div>
            <div class="product-price">${product.price}</div>
            <p style="color: var(--text-gray); font-size: 0.9rem; margin: 10px 0;">${product.description}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">View Details</button>
        </div>
    `).join('');
}

// Function to view post
function viewPost(postId) {
    window.location.href = `article.html?id=${postId}`;
}

// Function to add to cart (placeholder)
function addToCart(productId) {
    window.location.href = `products.html#product-${productId}`;
}

// Search functionality
function searchPosts(query) {
    const searchTerm = query.toLowerCase();
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    return filteredPosts;
}

// Category filter
function filterByCategory(category) {
    return posts.filter(post => post.category === category);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
    displayFeaturedProducts();
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const results = searchPosts(searchInput.value);
            displayPosts(results);
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const results = searchPosts(searchInput.value);
                displayPosts(results);
            }
        });
    }
    
    // Category cards click handler
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            window.location.href = `products.html?category=${category}`;
        });
    });
});