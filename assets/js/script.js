let buttonMobileTrigger = document.getElementById("mobileMenuTrigger");
buttonMobileTrigger.addEventListener("click", (e) => {
    if (e.target.classList.contains("mobile-overlay")) {
        return false;
    }
    
    if(e.currentTarget.classList.contains("mobile-menu-open")){
        e.currentTarget.classList.remove("mobile-menu-open");
        e.currentTarget.querySelector('.menu-mobile-icon').innerHTML = `
        <svg width="32" height="20" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.931885 1.28516H32.9319M0.931885 11.467H32.9319M0.931885 21.6488H32.9319" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        document.querySelector("body").classList.remove("mobile-menu-open");
    }else{
        e.currentTarget.classList.add("mobile-menu-open");
        e.currentTarget.querySelector('.menu-mobile-icon').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 15" fill="none">
            <path d="M0.931885 13.4668L12.9319 1.4668M0.931885 1.4668L12.9319 13.4668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        document.querySelector("body").classList.add("mobile-menu-open");
    }
})


/**
 * Get current page to prevent loading script not in use...
 */
const currentPage = document.querySelector("body").getAttribute("page");

if (currentPage === 'about'){
    new Swiper('.swiper-press', {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 24,
        pagination: {
            el: '.swiper-pagination-press',
            clickable: true,
            dynamicBullets: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-press',
            prevEl: '.swiper-button-prev-press',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            580: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            992: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            }
        }
    });

    new Swiper('.swiper-awards', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 24,
        pagination: {
            el: '.swiper-pagination-awards',
            clickable: true,
            dynamicBullets: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-awards',
            prevEl: '.swiper-button-prev-awards',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                loop: true,
            },
            580: {
                slidesPerView: 2,
                loop: true,
            },
            768: {
                slidesPerView: 3,
                loop: true,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });

    const projects = document.querySelectorAll('div.swiper-slide img');

    const projectObserverCallback = (projectsToWatch, projectObserver) => {
        projectsToWatch.forEach(projectToWatch => {
            if(projectToWatch.isIntersecting) {
                projectToWatch.target.classList.add('show-fade');
                //projectObserver.unobserve(projectToWatch.target);
            }else{
                projectToWatch.target.classList.remove('show-fade');
            }
        })
    }

    const projectObserverOptions = {
        threshold: .25
    }
    const projectObserver = new IntersectionObserver(projectObserverCallback, projectObserverOptions)

    projects.forEach(project => {
        projectObserver.observe(project);
    })
}

if (currentPage === 'project-list'){
    let filterBTN = document.querySelectorAll("[data-filter-type]");

    filterBTN.forEach(btn => {
        btn.addEventListener("click", function(){
            document.querySelector("[data-filter-type].active").classList.remove("active");
            this.classList.add("active");
            let filterType = this.getAttribute("data-filter-type");

            document.querySelectorAll("[data-project-type]").forEach(project => {
                project.style.display = "block";
            });

            if(filterType === "RESTAURANT"){
                document.querySelectorAll("[data-project-type]:not([data-project-type='RESTAURANT'])").forEach(project => {
                    project.style.display = "none";
                });
                return;
            }

            if(filterType === "HOSPITALITY"){
                document.querySelectorAll("[data-project-type]:not([data-project-type='HOSPITALITY'])").forEach(project => {
                    project.style.display = "none";
                });
                return;
            }

            if(filterType === "RETAIL"){
                document.querySelectorAll("[data-project-type]:not([data-project-type='RETAIL'])").forEach(project => {
                    project.style.display = "none";
                });
                return;
            }

            if(filterType === "RESIDENTIAL"){
                document.querySelectorAll("[data-project-type]:not([data-project-type='RESIDENTIAL'])").forEach(project => {
                    project.style.display = "none";
                });
                return;
            }
        });
    });

    const projects = document.querySelectorAll('.project-card');

    const projectObserverCallback = (projectsToWatch, projectObserver) => {
        projectsToWatch.forEach(projectToWatch => {
            if(projectToWatch.isIntersecting) {
                projectToWatch.target.classList.add('project-fade-effect');
                //projectObserver.unobserve(projectToWatch.target);
            }else{
                projectToWatch.target.classList.remove('project-fade-effect');
            }
        })
    }

    const projectObserverOptions = {
        threshold: .25
    }
    const projectObserver = new IntersectionObserver(projectObserverCallback, projectObserverOptions)

    projects.forEach(project => {
        projectObserver.observe(project);
    })
}

if (currentPage === 'contact'){
    const projects = document.querySelectorAll('.img-fade');

    const projectObserverCallback = (projectsToWatch, projectObserver) => {
        projectsToWatch.forEach(projectToWatch => {
            if(projectToWatch.isIntersecting) {
                projectToWatch.target.classList.add('fade-effect');
                //projectObserver.unobserve(projectToWatch.target);
            }else{
                projectToWatch.target.classList.remove('fade-effect');
            }
        })
    }

    const projectObserverOptions = {
        threshold: .25
    }
    const projectObserver = new IntersectionObserver(projectObserverCallback, projectObserverOptions)

    projects.forEach(project => {
        projectObserver.observe(project);
    })
}

if (currentPage === 'project-detail'){
    const projects = document.querySelectorAll('section.project-detail img');

    const projectObserverCallback = (projectsToWatch, projectObserver) => {
        projectsToWatch.forEach(projectToWatch => {
            if(projectToWatch.isIntersecting) {
                projectToWatch.target.classList.add('fade-effect');
                //projectObserver.unobserve(projectToWatch.target);
            }else{
                projectToWatch.target.classList.remove('fade-effect');
            }
        })
    }

    const projectObserverOptions = {
        threshold: .25
    }
    const projectObserver = new IntersectionObserver(projectObserverCallback, projectObserverOptions)

    projects.forEach(project => {
        projectObserver.observe(project);
    })
}
    