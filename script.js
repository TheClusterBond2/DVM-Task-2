gsap.registerPlugin(ScrollTrigger);



















var card7 = document.querySelector(".card--7");

card7.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card7.style.setProperty('--mouseX7', (e.clientX - ww) / 25);
  card7.style.setProperty('--mouseY7', (e.clientY - wh) / 25);

});

card7.addEventListener('mouseleave', function (e) {

  card7.style.setProperty('--mouseX7', 0);
  card7.style.setProperty('--mouseY7', 0);

});

var card8 = document.querySelector(".card--8");

card8.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card8.style.setProperty('--mouseX7', (e.clientX - ww) / 25);
  card8.style.setProperty('--mouseY7', (e.clientY - wh) / 25);

});

card8.addEventListener('mouseleave', function (e) {

  card8.style.setProperty('--mouseX7', 0);
  card8.style.setProperty('--mouseY7', 0);

});

 let lastScrollTop = 0;
  
 window.addEventListener("scroll", function () {
   let st = window.scrollY || window.pageYOffset;
   let marquee = document.querySelector('.marquee');
   let marqueeTop = marquee.offsetTop - 500;
   let marqueeHeight = marquee.offsetHeight;
   let marqueeBottom = marqueeTop + marqueeHeight;
 
   if (st > lastScrollTop && st >= marqueeTop && st <= marqueeBottom) {
 
     document.querySelector('#slide1').classList.remove('scroll-right');
     document.querySelector('#slide1').classList.add('scroll-left');
   } else if (st < lastScrollTop && st >= marqueeTop && st <= marqueeBottom) {
 
     document.querySelector('#slide1').classList.remove('scroll-left');
     document.querySelector('#slide1').classList.add('scroll-right');
   }
 
   lastScrollTop = st <= 0 ? 0 : st;
 }, false);
 
 let lastScrollTop2 = 0;
 
 window.addEventListener("scroll", function () {
   let st = window.scrollY || window.pageYOffset;
   let marquee = document.querySelector('.marquee');
   let marqueeTop = marquee.offsetTop - 400;
   let marqueeHeight = marquee.offsetHeight;
   let marqueeBottom = marqueeTop + marqueeHeight;
 
   if (st > lastScrollTop2 && st >= marqueeTop && st <= marqueeBottom) {
 
     document.querySelector('#slide2').classList.remove('scroll-left');
     document.querySelector('#slide2').classList.add('scroll-right');
   } else if (st < lastScrollTop2 && st >= marqueeTop && st <= marqueeBottom) {
 
     document.querySelector('#slide2').classList.remove('scroll-right');
     document.querySelector('#slide2').classList.add('scroll-left');
   }
 
   lastScrollTop2 = st <= 0 ? 0 : st;
 }, false);
 
 let lastScrollTop3 = 0;
 
 window.addEventListener("scroll", function () {
   let st = window.scrollY || window.pageYOffset;
   let marquee = document.querySelector('.marquee');
   let marqueeTop = marquee.offsetTop - 300;
   let marqueeHeight = marquee.offsetHeight;
   let marqueeBottom = marqueeTop + marqueeHeight;
 
   if (st > lastScrollTop3 && st >= marqueeTop && st <= marqueeBottom) {
 
     document.querySelector('#slide3').classList.remove('scroll-right');
     document.querySelector('#slide3').classList.add('scroll-left');
   } else if (st < lastScrollTop3 && st >= marqueeTop && st <= marqueeBottom) {
 
     document.querySelector('#slide3').classList.remove('scroll-left');
     document.querySelector('#slide3').classList.add('scroll-right');
   }
 
   lastScrollTop3 = st <= 0 ? 0 : st;
 }, false);
 
 let lastScrollTop4 = 0;
 
 window.addEventListener("scroll", function () {
   let st = window.scrollY || window.pageYOffset;
   let marquee = document.querySelector('.marquee');
   let marqueeTop = marquee.offsetTop - 200;
   let marqueeHeight = marquee.offsetHeight;
   let marqueeBottom = marqueeTop + marqueeHeight;
 
   if (st > lastScrollTop4 && st >= marqueeTop && st <= marqueeBottom) {
 
     document.querySelector('#slide4').classList.remove('scroll-left');
     document.querySelector('#slide4').classList.add('scroll-right');
   } else if (st < lastScrollTop4 && st >= marqueeTop && st <= marqueeBottom) {
 
     document.querySelector('#slide4').classList.remove('scroll-right');
     document.querySelector('#slide4').classList.add('scroll-left');
   }
 
   lastScrollTop4 = st <= 0 ? 0 : st;
 }, false);
  
 const carousel = document.querySelector(".carousel");
 const arrowBtns = document.querySelectorAll(".left-right .arrow");
 const firstCardWidth = carousel.querySelector(".card").offsetWidth;
 const cardWidth = firstCardWidth - 40; 
 
 let isDragging = false, startX, startScrollLeft;
 
 arrowBtns[0].style.backgroundColor = '#335DA3';
 
 const dots = document.querySelectorAll(".dot");
 
 dots.forEach((dot, index) => {
   dot.addEventListener("click", () => {
     dots.forEach((d) => d.classList.remove("active"));
     dot.classList.add("active");
 
     const scrollLeft = index * 4 * cardWidth;
     carousel.scrollLeft = scrollLeft;
 
     if (index === 0) {
       arrowBtns[0].style.backgroundColor = '#335DA3';
       arrowBtns[1].style.backgroundColor = '';
     } else if (index === dots.length - 1) {
       arrowBtns[0].style.backgroundColor = '';
       arrowBtns[1].style.backgroundColor = '#335DA3';
     } else {
       arrowBtns[0].style.backgroundColor = '';
       arrowBtns[1].style.backgroundColor = '';
     }
   });
 });
 
 let i = 0;
 
 arrowBtns.forEach((btn, index) => {
   btn.addEventListener("click", () => {
     const direction = index === 0 ? -1 : 1;
     const nextScrollLeft = carousel.scrollLeft + direction * 3 * cardWidth;
 
     if (nextScrollLeft >= 0 && nextScrollLeft <= carousel.scrollWidth - carousel.offsetWidth) {
       carousel.scrollLeft = nextScrollLeft;
       updateActiveDotAndScroll(direction);
 
       if (index === 1) {
         arrowBtns[0].style.backgroundColor = '#00358D';
       }
 
       if (index === 1) {
         i++; 
       } else {
         i--; 
       }
 
       if (i == 2) {
         arrowBtns[1].style.backgroundColor = '#335DA3';
       }
       else {
         arrowBtns[1].style.backgroundColor = '#00358D';
       }
 
       if (i == 0 && index === 0) {
         arrowBtns[0].style.backgroundColor = '#335DA3';
       }
       else {
         arrowBtns[0].style.backgroundColor = '#00358D';
       }
     }
   });
 });
 
 function updateActiveDotAndScroll(direction) {
   const activeDot = document.querySelector(".dot.active");
   const currentIndex = Array.from(dots).indexOf(activeDot);
   let newIndex = currentIndex + direction;
 
   if (newIndex < 0) {
     newIndex = dots.length - 1;
   } else if (newIndex >= dots.length) {
     newIndex = 0;
   }
 
   dots.forEach((dot) => dot.classList.remove("active"));
   dots[newIndex].classList.add("active");
 
   carousel.scrollLeft = newIndex * 4 * cardWidth;
 }
 
 const dragStart = (e) => {
   isDragging = true;
   carousel.classList.add("dragging");
   startX = e.pageX;
   startScrollLeft = carousel.scrollLeft;
 }
 const dragging = (e) => {
   if (!isDragging) return;
   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
 }
 
 const dragStop = () => {
   isDragging = false;
   carousel.classList.remove("dragging")
 }
 
 carousel.addEventListener("mousemove", dragging);
 carousel.addEventListener("mousedown", dragStart);
 document.addEventListener("mouseup", dragStop);

 let lastScrollTop5 = 0;
  
 window.addEventListener("scroll", function() {
     let st = window.pageYOffset || document.documentElement.scrollTop;
 
     if (st > lastScrollTop5) {
         document.querySelector(".rotator1").classList.add("hidden");
         document.querySelector(".rotator2").classList.remove("hidden");
     } else {
         document.querySelector(".rotator1").classList.remove("hidden");
         document.querySelector(".rotator2").classList.add("hidden");
     }
 
     lastScrollTop5 = st <= 0 ? 0 : st;
 }, false);
 
 document.querySelector(".rotator2").addEventListener("mouseover", function() {
   document.querySelector(".rotator1").classList.remove("hidden");
   document.querySelector(".rotator2").classList.add("hidden");
   document.querySelector(".rotator1").style.backgroundColor = "#f0cd76";
 });
 
 document.querySelector(".rotator1").addEventListener("mouseout", function() {
   document.querySelector(".rotator1").style.backgroundColor = "#fff";
   document.querySelector(".rotator1").classList.add("hidden");
   document.querySelector(".rotator2").classList.remove("hidden");
 });

  const images = document.querySelectorAll('.image-container1 img');
  let currentIndex = 0;
  
  function showImage(index) {
    images.forEach(img => img.classList.remove('active', 'out'));
    images[currentIndex].classList.add('out');
    currentIndex = (index + 1) % images.length;
    images[currentIndex].classList.add('active');
  }
  
  setInterval(() => {
    showImage(currentIndex);
  }, 2000);
  
  
  const images1 = document.querySelectorAll('.image-container2 img');
  let currentIndex1 = 0;
  
  function showImage2(index) {
    images1.forEach(img => img.classList.remove('active', 'out'));
    images1[currentIndex1].classList.add('out');
    currentIndex1 = (index + 1) % images1.length;
    images1[currentIndex1].classList.add('active');
  }
  
  setInterval(() => {
    showImage2(currentIndex1);
  }, 2000);