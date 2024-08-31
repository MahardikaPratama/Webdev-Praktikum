// JavaScript for accordion and active menu link
document.addEventListener('DOMContentLoaded', () => {
    const accordionButton = document.getElementById('accordion-button');
    const accordionContent = document.getElementById('accordion-content');
    const accordionIcon = document.getElementById('accordion-icon');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Toggle accordion
    accordionButton.addEventListener('click', function() {
        if (accordionContent.classList.contains('show')) {
            accordionContent.classList.remove('show');
            accordionIcon.textContent = '+';
        } else {
            accordionContent.classList.add('show');
            accordionIcon.textContent = '−';
        }
    });

    // Set active class on menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            menuLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});