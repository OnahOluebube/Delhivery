const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-page-links');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search')


searchIcon.addEventListener('click', function () {
    searchInput.classList.toggle('search-active');
}

)

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.hero-content').classList.toggle('not-loaded');
});

const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.1
};

const observers = new IntersectionObserver((entries, observers) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('enter');
        }
    });
}, options);