new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 5000,
    animationDuration: 1500,
    gap: 0,
    hoverpause: false,
    animationTimingFunc: 'ease-out',
}).mount()

let buttonMobileTrigger = document.getElementById("mobileMenuTrigger");
buttonMobileTrigger.addEventListener("click", (e) => {
    if(e.target.classList.contains("mobile-menu-open")){
        e.target.classList.remove("mobile-menu-open");
        e.target.querySelector('.menu-mobile-icon').innerHTML = `
        <svg width="32" height="20" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.931885 1.28516H32.9319M0.931885 11.467H32.9319M0.931885 21.6488H32.9319" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        document.querySelector("main").classList.remove("mobile-menu-open");
        document.querySelector("div.middle-screen").style.opacity = 1;
    }else{
        e.target.classList.add("mobile-menu-open");
        e.target.querySelector('.menu-mobile-icon').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 15" fill="none">
            <path d="M0.931885 13.4668L12.9319 1.4668M0.931885 1.4668L12.9319 13.4668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        document.querySelector("main").classList.add("mobile-menu-open");
        document.querySelector("div.middle-screen").style.opacity = 0;
    }
})
