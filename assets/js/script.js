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

    new Glide('.glide-press', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        draggable: true,
        gap: 24,
        hoverpause: false,
        animationTimingFunc: 'ease-out',

        breakpoints:{
            992:{
                perView: 2,
            },
            540:{
                perView: 1,
            },
        }
    }).mount()

    new Glide('.glide-awards', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        draggable: true,
        gap: 24,
        hoverpause: false,
        animationTimingFunc: 'ease-out',

        breakpoints:{
            992:{
                perView: 2,
            },
            540:{
                perView: 1,
            },
        }
    }).mount()
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
    