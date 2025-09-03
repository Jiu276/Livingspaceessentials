// Blog functionality
let currentCategory = 'all';
let currentPage = 1;
const postsPerPage = 5;

// Display blog posts
function displayBlogPosts(category = 'all', page = 1) {
    const blogPostsContainer = document.getElementById('blogPosts');
    if (!blogPostsContainer) return;

    // Filter posts by category
    let filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);
    
    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    // Display posts
    blogPostsContainer.innerHTML = paginatedPosts.map(post => `
        <article class="blog-post-card" onclick="window.location.href='article.html?id=${post.id}'">
            <img src="${post.image}" alt="${post.title}" class="blog-post-image">
            <div class="blog-post-content">
                <span class="blog-post-category">${post.category}</span>
                <h2 class="blog-post-title">${post.title}</h2>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <div class="blog-post-meta">
                    <div class="post-author">
                        <i class="fas fa-user"></i>
                        <span>${post.author}</span>
                    </div>
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');

    // Display pagination
    displayPagination(totalPages, page);
}

// Display pagination
function displayPagination(totalPages, currentPage) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">Previous</button>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="page-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="page-btn" onclick="changePage(${i})">${i}</button>`;
        }
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">Next</button>`;
    }

    paginationContainer.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    currentPage = page;
    displayBlogPosts(currentCategory, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Display recent posts
function displayRecentPosts() {
    const recentPostsContainer = document.getElementById('recentPosts');
    if (!recentPostsContainer) return;

    const recentPosts = posts.slice(0, 5);
    recentPostsContainer.innerHTML = recentPosts.map(post => `
        <div class="recent-post">
            <div class="recent-post-title" onclick="window.location.href='article.html?id=${post.id}'">
                ${post.title}
            </div>
            <div class="recent-post-date">${post.date}</div>
        </div>
    `).join('');
}

// Search blog posts
function searchBlogPosts(query) {
    const searchTerm = query.toLowerCase();
    const searchResults = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    const blogPostsContainer = document.getElementById('blogPosts');
    if (!blogPostsContainer) return;

    if (searchResults.length === 0) {
        blogPostsContainer.innerHTML = '<p style="text-align: center; font-size: 1.2rem; color: var(--text-gray);">No articles found matching your search.</p>';
        document.getElementById('pagination').innerHTML = '';
        return;
    }

    // Display search results
    blogPostsContainer.innerHTML = searchResults.map(post => `
        <article class="blog-post-card" onclick="window.location.href='article.html?id=${post.id}'">
            <img src="${post.image}" alt="${post.title}" class="blog-post-image">
            <div class="blog-post-content">
                <span class="blog-post-category">${post.category}</span>
                <h2 class="blog-post-title">${post.title}</h2>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <div class="blog-post-meta">
                    <div class="post-author">
                        <i class="fas fa-user"></i>
                        <span>${post.author}</span>
                    </div>
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');

    document.getElementById('pagination').innerHTML = '';
}

// Initialize blog page
document.addEventListener('DOMContentLoaded', () => {
    // Display initial posts
    displayBlogPosts();
    displayRecentPosts();

    // Category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            e.target.classList.add('active');
            // Update current category and display posts
            currentCategory = e.target.dataset.category;
            currentPage = 1;
            displayBlogPosts(currentCategory, currentPage);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            if (searchInput.value.trim()) {
                searchBlogPosts(searchInput.value);
            } else {
                displayBlogPosts(currentCategory, currentPage);
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (searchInput.value.trim()) {
                    searchBlogPosts(searchInput.value);
                } else {
                    displayBlogPosts(currentCategory, currentPage);
                }
            }
        });

        searchInput.addEventListener('input', (e) => {
            if (e.target.value === '') {
                displayBlogPosts(currentCategory, currentPage);
            }
        });
    }

    // Tag cloud click handlers
    const tagItems = document.querySelectorAll('.tag-item');
    tagItems.forEach(tag => {
        tag.addEventListener('click', () => {
            searchInput.value = tag.textContent;
            searchBlogPosts(tag.textContent);
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.sidebar-newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});