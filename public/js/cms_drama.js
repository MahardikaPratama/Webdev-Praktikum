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

document.addEventListener("DOMContentLoaded", function() {
    // Referensi tombol validate dan modal
    const validateButton = document.querySelector("a[href='#']"); // Asumsikan tombol Validate memiliki href '#'
    const modal = document.getElementById("movieApprovalModal");
    const closeModalButton = document.getElementById("closeModal");

    // Fungsi untuk menampilkan modal
    validateButton.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "flex";
    });

    // Fungsi untuk menutup modal
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Menutup modal saat klik di luar konten modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
