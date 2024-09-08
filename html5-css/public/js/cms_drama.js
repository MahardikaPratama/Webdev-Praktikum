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


document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const closeSidebar = document.getElementById('close-sidebar');
    // Toggle sidebar visibility
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModal');
    const modal = document.getElementById('movieApprovalModal');
    const approveButton = document.getElementById('approveButton');
    const deleteButton = document.getElementById('deleteButton');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const carousel = document.getElementById('actor-carousel');

    openModalButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', function () {
        modal.classList.add('hidden');  
    });

    approveButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    deleteButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    scrollLeftButton.addEventListener('click', function () {
        carousel.scrollBy({ left: -100, behavior: 'smooth' });
    });

    scrollRightButton.addEventListener('click', function () {
        carousel.scrollBy({ left: 100, behavior: 'smooth' });
    });
});