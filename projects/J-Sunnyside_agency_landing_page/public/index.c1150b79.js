const navBtn=document.querySelector(".hamb-button"),nav=document.querySelector(".nav"),navLinks=document.querySelectorAll(".nav__link"),overlay=document.querySelector(".overlay");function toggleMenu(){navBtn.classList.toggle("active"),navBtn.classList.toggle("not-active"),nav.classList.toggle("active"),overlay.classList.toggle("active"),nav.classList.contains("active")?nav.style.height=nav.scrollHeight+80+"px":nav.style.height=0}function accentLinks(e){navLinks.forEach((e=>{e.classList.remove("nav__link--accent")})),e.target.classList.add("nav__link--accent")}navBtn.addEventListener("click",toggleMenu),overlay.addEventListener("click",toggleMenu),navLinks.forEach((e=>{e.addEventListener("click",accentLinks)}));
//# sourceMappingURL=index.c1150b79.js.map
