/*nav*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav .nav-item a.line");

let scrollTimeout;

window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop - 200;  
            const bottom = top + section.clientHeight;

            if (scrollY >= top && scrollY < bottom) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");
            if (current && link.getAttribute("href").includes(current)) {
                link.classList.add("active-link");
            }
        });

    }, 50); 
});

const dropdown = document.querySelector(".mega-menu");

const arrow = dropdown ? dropdown.querySelector("i.fa-chevron-down") : null;

const servicesToggle = dropdown ? dropdown.querySelector(".dropdown-toggle") : null;

if (dropdown && arrow && servicesToggle) {

    dropdown.addEventListener("show.bs.dropdown", () => {
        arrow.style.transform = "rotate(180deg)";
        arrow.style.transition = "0.3s ease";
    });


    dropdown.addEventListener("hide.bs.dropdown", () => {
        arrow.style.transform = "rotate(0deg)";
        servicesToggle.blur();
    });
}
/************************************************/