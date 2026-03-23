// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const SITE_TITLE_SUFFIX = 'Livingspaceessentials';

function setArticlePageTitle(article) {
    if (article && article.title) {
        document.title = `${article.title} - ${SITE_TITLE_SUFFIX}`;
    }
}

/** Resolve article from ?slug=... or legacy ?id=... */
function findArticleFromQuery() {
    if (typeof posts === 'undefined') return null;
    const slugParam = getUrlParameter('slug');
    const idParam = getUrlParameter('id');
    if (slugParam) {
        const decoded = decodeURIComponent(slugParam);
        return posts.find(post => post.slug === decoded);
    }
    if (idParam) {
        return posts.find(post => post.id == idParam);
    }
    return null;
}

// Set tab title as soon as scripts load (before DOMContentLoaded) so the browser bar shows the article name immediately
(function syncArticleDocumentTitleFromUrl() {
    const article = findArticleFromQuery();
    if (article) {
        setArticlePageTitle(article);
    }
})();

// Render article content
function renderArticle(article) {
    if (!article) {
        document.title = `Article Not Found - ${SITE_TITLE_SUFFIX}`;
        document.getElementById('articleContent').innerHTML = `
            <div class="article-header">
                <h1 class="article-title">Article Not Found</h1>
                <p>Sorry, the article you're looking for doesn't exist.</p>
                <a href="blog.html" style="color: var(--primary-color);">Back to Blog</a>
            </div>
        `;
        return;
    }
    
    const bodyContent = typeof article.content === 'string' ? article.content.trim() : '';
    const hasHtml = /<[^>]+>/.test(bodyContent);
    const renderedContent = hasHtml ? bodyContent : `<p>${bodyContent}</p>`;
    
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
            ${renderedContent}
        </div>
    `;
    
    // Update page title (also set early via syncArticleDocumentTitleFromUrl)
    setArticlePageTitle(article);
    
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
            <a href="${getArticleUrl(post)}" class="related-post-title">${post.title}</a>
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
    const article = findArticleFromQuery();
    
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
    const article = findArticleFromQuery();
    const hasLegacyId = getUrlParameter('id');
    const hasSlug = getUrlParameter('slug');

    if (article) {
        if (hasLegacyId && article.slug) {
            history.replaceState(null, '', '?slug=' + encodeURIComponent(article.slug));
        }
        renderArticle(article);
        setupShareButtons();
    } else if (hasLegacyId || hasSlug) {
        renderArticle(null);
    } else {
        window.location.href = 'blog.html';
    }
});