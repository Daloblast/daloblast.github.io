document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Toggles the 'active' class on both the button and the nav for styling
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Optional: for animating the hamburger icon
        });

        // Close the menu when a link is clicked (important for one-pagers)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is open before closing
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }


    // --- 2. Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent the default jump action
            e.preventDefault();

            // Get the target element's ID
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use the built-in smooth scroll behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
