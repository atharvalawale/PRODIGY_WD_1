document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {  // Check if the page is scrolled more than 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
