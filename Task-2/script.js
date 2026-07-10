/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

const progressBar=document.querySelector(".progress-bar");

if(progressBar){

progressBar.style.width=progress+"%";

}

});


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

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


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/200;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString()+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:0.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealItems=document.querySelectorAll(

".about-card,.mission-card,.program-card,.impact-box,.counter-card,.gallery-grid img,.event-card,.info-box"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".7s ease";

revealObserver.observe(item);

});


/* ==========================================
   SMOOTH BUTTON SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ==========================================
   CONTACT FORM
========================================== */

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.borderColor="red";

valid=false;

}else{

input.style.borderColor="#00d9ff";

}

});

if(valid){

alert("Thank you! Your message has been sent.");

form.reset();

}

});

}


/* ==========================================
   STICKY HEADER
========================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(4,15,30,.95)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

}else{

header.style.background="rgba(5,15,32,.75)";
header.style.boxShadow="none";

}

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".primary").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.4)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";
ripple.style.pointerEvents="none";

this.style.position="relative";
this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ==========================================
   RIPPLE KEYFRAME
========================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

nav a.active{

color:#00d9ff;

}

`;

document.head.appendChild(style);
/* ===================================
BACK TO TOP
=================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===================================
PARTICLES
=================================== */

const particleContainer=document.querySelector(".particles");

for(let i=0;i<60;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.bottom="-20px";

p.style.animationDuration=(5+Math.random()*8)+"s";

p.style.animationDelay=Math.random()*5+"s";

particleContainer.appendChild(p);

}

/* ===================================
CURSOR GLOW
=================================== */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ===================================
LIGHTBOX
=================================== */

const gallery=document.querySelectorAll(".gallery-grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

const close=document.getElementById("closeLightbox");

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

};

});

close.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

/* ===================================
TYPING EFFECT
=================================== */

const title=document.querySelector(".hero-left h1");

const original=title.innerHTML;

title.innerHTML="";

let i=0;

function type(){

if(i<original.length){

title.innerHTML+=original.charAt(i);

i++;

setTimeout(type,35);

}

}

type();