// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Search functionality for all-topics.html
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const masonryItems = document.querySelectorAll('.masonry-item');
    
    if (searchInput && searchButton) {
        function filterTopics() {
            const searchTerm = searchInput.value.toLowerCase();
            
            masonryItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        
        searchInput.addEventListener('input', filterTopics);
        searchButton.addEventListener('click', filterTopics);
    }

    // Filter by difficulty
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const level = this.dataset.filter;
                
                masonryItems.forEach(item => {
                    const itemLevel = item.dataset.difficulty;
                    
                    if (level === 'all' || itemLevel === level) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Pagination functionality
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageButtons = document.querySelectorAll('.page-numbers button');
    
    if (pageButtons.length > 0) {
        let currentPage = 1;
        
        function updatePagination() {
            pageButtons.forEach((button, index) => {
                button.classList.toggle('active', index + 1 === currentPage);
            });
            
            // Here you would typically load content for the current page
            // For now, we'll just scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        pageButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                currentPage = index + 1;
                updatePagination();
            });
        });
        
        if (prevPage) {
            prevPage.addEventListener('click', function() {
                if (currentPage > 1) {
                    currentPage--;
                    updatePagination();
                }
            });
        }
        
        if (nextPage) {
            nextPage.addEventListener('click', function() {
                if (currentPage < pageButtons.length) {
                    currentPage++;
                    updatePagination();
                }
            });
        }
    }
});