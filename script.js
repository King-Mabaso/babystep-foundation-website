// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            // Optional: Change icon to X when open
            menuToggle.textContent = navUl.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking a link (good for mobile)
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }
});