// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Render article content
function renderArticle(articleId) {
    const article = posts.find(post => post.id == articleId);
    
    if (!article) {
        document.getElementById('articleContent').innerHTML = `
            <div class="article-header">
                <h1 class="article-title">Article Not Found</h1>
                <p>Sorry, the article you're looking for doesn't exist.</p>
                <a href="blog.html" style="color: var(--primary-color);">Back to Blog</a>
            </div>
        `;
        return;
    }
    
    // Expand article content with more details
    const expandedContent = `
        <p>${article.content}</p>
        
        <h2>Key Takeaways</h2>
        <ul>
            <li>Quality products make a significant difference in daily life</li>
            <li>Investing in durable items saves money in the long run</li>
            <li>Good design enhances both functionality and aesthetics</li>
            <li>Sustainable choices benefit both you and the environment</li>
        </ul>
        
        <h2>Our Recommendations</h2>
        <p>Based on extensive research and testing, we've curated a selection of products that meet our high standards for quality, design, and value. Every item featured in this article has been carefully evaluated to ensure it delivers on its promises.</p>
        
        <h2>Tips for Implementation</h2>
        <p>Start small with one or two changes, then gradually incorporate more elements as you become comfortable. Remember that creating a beautiful living space is a journey, not a destination. Take time to enjoy the process and celebrate small victories along the way.</p>
        
        <h2>Final Thoughts</h2>
        <p>Your home is a reflection of your personality and lifestyle. By choosing the right products and following expert advice, you can create a space that not only looks beautiful but also enhances your daily life. We hope this article has provided valuable insights and inspiration for your home improvement journey.</p>
    `;
    
    const articleContent = document.getElementById('articleContent');
    articleContent.innerHTML = `
        <header class="article-header">
            <span class="article-category">${article.category}</span>
            <h1 class="article-title">${article.title}</h1>
            <div class="article-meta">
                <div class="author-info">
                    <i class="fas fa-user"></i>
                    <span>${article.author}</span>
                </div>
                <span><i class="fas fa-calendar"></i> ${article.date}</span>
                <span><i class="fas fa-clock"></i> ${article.readTime}</span>
            </div>
        </header>
        
        <img src="${article.image}" alt="${article.title}" class="article-hero-image">
        
        <div class="article-body">
            ${expandedContent}
        </div>
    `;
    
    // Update page title
    document.title = `${article.title} - Livingspaceessentials`;
    
    // Load article tags
    loadArticleTags(article.tags);
    
    // Load related posts
    loadRelatedPosts(article.id, article.category);
    
    // Load related products
    loadRelatedProducts(article.category);
}

// Load article tags
function loadArticleTags(tags) {
    const tagsContainer = document.getElementById('articleTags');
    if (!tagsContainer) return;
    
    tagsContainer.innerHTML = tags.map(tag => 
        `<span class="tag-pill">${tag}</span>`
    ).join('');
}

// Load related posts
function loadRelatedPosts(currentId, category) {
    const relatedPosts = posts
        .filter(post => post.id !== currentId && post.category === category)
        .slice(0, 3);
    
    if (relatedPosts.length === 0) {
        // If no same category posts, select other random posts
        const otherPosts = posts
            .filter(post => post.id !== currentId)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        renderRelatedPosts(otherPosts);
    } else {
        renderRelatedPosts(relatedPosts);
    }
}

function renderRelatedPosts(posts) {
    const relatedPostsContainer = document.getElementById('relatedPosts');
    
    if (posts.length === 0) {
        relatedPostsContainer.innerHTML = '<p style="color: var(--text-gray);">No related articles found</p>';
        return;
    }
    
    relatedPostsContainer.innerHTML = posts.map(post => `
        <div class="related-post">
            <a href="article.html?id=${post.id}" class="related-post-title">${post.title}</a>
            <span class="related-post-date">${post.date}</span>
        </div>
    `).join('');
}

// Load related products
function loadRelatedProducts(category) {
    const relatedProductsContainer = document.getElementById('relatedProducts');
    if (!relatedProductsContainer || typeof allProducts === 'undefined') return;
    
    // Map article categories to product categories
    const categoryMap = {
        'Furniture': 'furniture',
        'Kitchen': 'kitchen',
        'Bedroom': 'bedroom',
        'Lighting': 'lighting',
        'Decor': 'decor',
        'Office': 'office'
    };
    
    const productCategory = categoryMap[category] || 'furniture';
    const relatedProducts = allProducts
        .filter(product => product.category === productCategory)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        // Show random products if no matching category
        const randomProducts = allProducts
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
        renderRelatedProducts(randomProducts);
    } else {
        renderRelatedProducts(relatedProducts);
    }
}

function renderRelatedProducts(products) {
    const container = document.getElementById('relatedProducts');
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                ${product.rating}
            </div>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart" onclick="window.location.href='products.html#product-${product.id}'">
                View Product
            </button>
        </div>
    `).join('');
}

// Share functionality
function setupShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    const articleId = getUrlParameter('id');
    const article = posts.find(post => post.id == articleId);
    
    if (!article) return;
    
    const url = window.location.href;
    const title = article.title;
    
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.dataset.platform;
            let shareUrl = '';
            
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
                    break;
                case 'pinterest':
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Page load
document.addEventListener('DOMContentLoaded', () => {
    const articleId = getUrlParameter('id');
    
    if (articleId) {
        renderArticle(articleId);
        setupShareButtons();
    } else {
        // Redirect to blog if no ID
        window.location.href = 'blog.html';
    }
});