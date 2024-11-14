document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    
    // Fade in and slide up animation
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);

    // Toggle menu
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

   
});


// Add smooth scrolling for the "See our Services" button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
});
document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.container');
        const testimonial = document.querySelector('.testimonial');
        const image = document.querySelector('.image');

        container.addEventListener('mouseenter', function() {
            testimonial.style.transform = 'translateY(0)';
            image.style.transform = 'scale(1.05)';
        });

        container.addEventListener('mouseleave', function() {
            testimonial.style.transform = 'translateY(100%)';
            image.style.transform = 'scale(1)';
        });
    });