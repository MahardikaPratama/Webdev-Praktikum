const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});
