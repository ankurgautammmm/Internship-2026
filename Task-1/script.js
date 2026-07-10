/*=========================================================
        InAmigos Foundation
        Professional JavaScript v2
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
        SELECTORS
    =========================*/

    const header = document.querySelector("header");
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");
    const topBtn = document.getElementById("topBtn");

    /*=========================
        MOBILE MENU
    =========================*/

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("showMenu");

            menuBtn.classList.toggle("active");

        });

    }

    /*=========================
        CLOSE MENU
    =========================*/

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("showMenu");

            menuBtn.classList.remove("active");

        });

    });

    /*=========================
        STICKY NAVBAR
    =========================*/

    function stickyNavbar() {

        if (window.scrollY > 60) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }

    window.addEventListener("scroll", stickyNavbar);

    stickyNavbar();

    /*=========================
        BACK TO TOP
    =========================*/

    function backToTop() {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    }

    window.addEventListener("scroll", backToTop);

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=========================
        SMOOTH SCROLL
    =========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });
/*=========================================================
        PART 2
        Counter + Scroll Reveal
=========================================================*/

/*=========================
        COUNTER ANIMATION
=========================*/

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = parseInt(counter.dataset.target);

    let count = 0;

    const increment = Math.ceil(target / 120);

    function updateCounter() {

        count += increment;

        if (count >= target) {

            counter.textContent = target.toLocaleString();

            return;

        }

        counter.textContent = count.toLocaleString();

        requestAnimationFrame(updateCounter);

    }

    updateCounter();

};

/*=========================
    START COUNTER ON SCROLL
=========================*/

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================
        SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(

`

.card,
.program-card,
.project-card,
.gallery-item,
.testimonial-card,
.partner-card,
.impact-card,
.why-card,
.mission-box,
.info-box,
.timeline-item,
.achievement-box,
.cta-box

`

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

revealElements.forEach(element=>{

    element.classList.add("fade-up");

    revealObserver.observe(element);

});

/*=========================
        HERO IMAGE EFFECT
=========================*/

const heroImage = document.querySelector(".hero-right img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.clientX)/45;

const y = (window.innerHeight/2 - e.clientY)/45;

heroImage.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave",()=>{

heroImage.style.transform="rotateY(0deg) rotateX(0deg)";

});

}

/*=========================
        CARD HOVER
=========================*/

document.querySelectorAll(

".program-card,.project-card,.gallery-item"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/*=========================
        ACTIVE NAV LINK
=========================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
});
/*=========================================================
        PART 3
        Forms + Toast + Gallery + Loading
=========================================================*/

/*=========================
        TOAST MESSAGE
=========================*/

function showToast(message, type = "success") {

    const existing = document.querySelector(".toast");

    if (existing) {

        existing.remove();

    }

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = `
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 3000);

}

/*=========================
        EMAIL VALIDATION
=========================*/

function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

/*=========================
        CONTACT FORM
=========================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs = contactForm.querySelectorAll("input, textarea");

const name = inputs[0].value.trim();

const email = inputs[1].value.trim();

const message = inputs[3].value.trim();

if(name===""){

showToast("Please enter your name.");

return;

}

if(!validEmail(email)){

showToast("Enter a valid email address.");

return;

}

if(message.length<10){

showToast("Message should contain at least 10 characters.");

return;

}

showToast("Message sent successfully!");

contactForm.reset();

});

}

/*=========================
        VOLUNTEER FORM
=========================*/

const volunteerForm = document.getElementById("volunteerForm");

if(volunteerForm){

volunteerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs = volunteerForm.querySelectorAll("input");

const name = inputs[0].value.trim();

const email = inputs[1].value.trim();

if(name===""){

showToast("Please enter your full name.");

return;

}

if(!validEmail(email)){

showToast("Please enter a valid email.");

return;

}

showToast("Thank you for volunteering!");

volunteerForm.reset();

});

}

/*=========================
        IMAGE LIGHTBOX
=========================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

if(galleryImages.length){

const lightbox = document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`

<span class="close-lightbox">&times;</span>

<img src="">

`;

document.body.appendChild(lightbox);

const img = lightbox.querySelector("img");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

img.src=image.src;

lightbox.classList.add("show");

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

}

/*=========================
        ESC CLOSE
=========================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

const lightbox=document.querySelector(".lightbox");

if(lightbox){

lightbox.classList.remove("show");

}

}

});

/*=========================
        LOADER
=========================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},500);

}

});

/*=========================
        YEAR
=========================*/

const year=document.querySelector(".current-year");

if(year){

year.textContent=new Date().getFullYear();

}

/*=========================
        END
=========================*/

console.log(

"%cInAmigos Foundation Loaded",

"color:#38BDF8;font-size:22px;font-weight:bold;"

);
const donateBtn = document.getElementById("openDonate");
const donateModal = document.getElementById("donateModal");
const closeDonate = document.querySelector(".close-donate");

if (donateBtn) {
    donateBtn.addEventListener("click", function(e) {
        e.preventDefault();
        donateModal.style.display = "flex";
    });
}

if (closeDonate) {
    closeDonate.addEventListener("click", function() {
        donateModal.style.display = "none";
    });
}

window.addEventListener("click", function(e) {
    if (e.target === donateModal) {
        donateModal.style.display = "none";
    }
});
