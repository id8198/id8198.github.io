// Main JavaScript file for personal website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Create and append overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-overlay';
    document.body.appendChild(overlay);

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navbar.classList.toggle('menu-open');
            overlay.classList.toggle('active');
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navbar.classList.remove('menu-open');
            overlay.classList.remove('active');
        });
    }

    // // Loading page functionality
    // // Hide loader when page is loaded
    // const loader = document.querySelector('.loader-wrapper');
    // // const overlay = document.querySelector('.page-overlay'); // Already created above
    
    // overlay.classList.remove('loader-active');
    // loader.classList.remove('active');
});

// // Show loader when navigating away
// window.addEventListener('beforeunload', function() {
//     const loader = document.querySelector('.loader-wrapper');
//     loader.classList.add('active');
// });

// // Enhanced back/forward navigation handling
// window.addEventListener('pageshow', function(event) {
//     const loader = document.querySelector('.loader-wrapper');
//     const overlay = document.querySelector('.page-overlay');
    
//     // Check if page is loaded from cache (back/forward navigation)
//     if (event.persisted) {
//         loader.classList.remove('active');
//         overlay.classList.remove('loader-active');
//     }
// });

// window.addEventListener('popstate', function() {
//     const loader = document.querySelector('.loader-wrapper');
//     const overlay = document.querySelector('.page-overlay');
    
//     // Remove loader and overlay
//     loader.classList.remove('active');
//     overlay.classList.remove('loader-active');
// });

// // Additional mobile-specific handler
// document.addEventListener('visibilitychange', function() {
//     if (!document.hidden) {
//         const loader = document.querySelector('.loader-wrapper');
//         const overlay = document.querySelector('.page-overlay');
        
//         loader.classList.remove('active');
//         overlay.classList.remove('loader-active');
//     }
// });

// Scroll-based navbar transparency
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});