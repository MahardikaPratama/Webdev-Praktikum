document.addEventListener('DOMContentLoaded', () => {
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const carousel = document.getElementById('actor-carousel');

    scrollLeftButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRightButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
    });
});
