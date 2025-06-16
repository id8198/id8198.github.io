// Main JavaScript file for personal website

// Loading page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader when page is loaded
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.remove('active');
    
    // Add click handlers to all internal links
    document.querySelectorAll('a').forEach(link => {
        // Skip external links and downloads
        if (link.href.startsWith(window.location.origin) && 
            !link.hasAttribute('download') &&
            !link.hasAttribute('target')) {
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetHref = this.href;
                
                // Show loader
                loader.classList.add('active');
                
                // Navigate after a short delay
                setTimeout(() => {
                    window.location.href = targetHref;
                }, 300);
            });
        }
    });
});

// Show loader when navigating away
window.addEventListener('beforeunload', function() {
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('active');
});

// Scroll-based navbar transparency
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});