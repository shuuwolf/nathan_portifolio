
/**
 * Get current page to prevent loading script not in use...
 */
const currentPage = document.querySelector("body").getAttribute("page");

if (currentPage === 'about'){
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        hoverpause: false,
        animationTimingFunc: 'ease-out',
    }).mount()
}
    