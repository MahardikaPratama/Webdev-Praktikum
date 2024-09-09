document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const closeSidebar = document.getElementById('close-sidebar');
    const menuLinks = document.querySelectorAll('.menu-link');
    const listDrama = document.querySelectorAll('.list-drama');
    const loginButton = document.getElementById("login-button");
    // Toggle sidebar visibility
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });

    loginButton.addEventListener("click", () => {
        window.location.href = "loginPage.html";
    });

    listDrama.forEach(drama => {
        drama.addEventListener('click', function() {
            window.location.href = "detailPage.html";
        });
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

document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-content');
    const filterButton = document.getElementById('filter-button');
    const closeFilterButton = document.getElementById('clear-filter-button');

    // Toggle filter visibility
    filterButton.addEventListener('click', () => {
        filters.forEach(filter => filter.classList.toggle('hidden'));
        filterButton.classList.add('hidden');
        closeFilterButton.classList.remove('hidden');
    });

    // Hide filter and show filter button
    closeFilterButton.addEventListener('click', () => {
        filters.forEach(filter => filter.classList.add('hidden'));
        filterButton.classList.remove('hidden');
        closeFilterButton.classList.add('hidden');
    });
});
