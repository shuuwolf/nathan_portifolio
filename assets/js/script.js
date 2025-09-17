
/**
 * Get current page to prevent loading script not in use...
 */
const currentPage = document.querySelector("body").getAttribute("page");

if (currentPage === 'about'){
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        gap: 24,
        hoverpause: false,
        animationTimingFunc: 'ease-out',
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
    