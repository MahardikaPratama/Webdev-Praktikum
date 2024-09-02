document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const closeSidebar = document.getElementById('close-sidebar');
    const menuLinks = document.querySelectorAll('.menu-link');
    

    // Toggle sidebar visibility
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });

    // Set the active class on the current page menu item
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('bg-gray-300');
            link.classList.remove('hover:bg-gray-300');
        } else {
            link.classList.remove('bg-gray-300');
            link.classList.add('hover:bg-gray-300');
        }
    });
    
});


// JavaScript to close the modal
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("movieApprovalModal").style.display = "none";
});