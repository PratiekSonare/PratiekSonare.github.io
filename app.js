document.addEventListener("DOMContentLoaded", function() {
  fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function() {
  fetch('../../footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

document.querySelectorAll('.faq').forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//show active page logic
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// navbar disappearing logic
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Downscroll
    navbar.classList.add('navbar-hidden');
  } else {
    // Upscroll
    navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = scrollTop;
});


//project - slider logic
function initializeSlider(sliderSelector, nextButtonId, prevButtonId) {
  let items = document.querySelectorAll(sliderSelector + ' .item');
  let next = document.getElementById(nextButtonId);
  let prev = document.getElementById(prevButtonId);
  
  let active = 0;
  function loadShow(){
      let stt = 0;
      items[active].style.transform = `none`;
      items[active].style.zIndex = 1;
      items[active].style.filter = 'none';
      items[active].style.opacity = 1;
      for(let i = active + 1; i < items.length; i++){
          stt++;
          items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(5px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
      stt = 0;
      for(let i = active - 1; i >= 0; i--){
          stt++;
          items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(5px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
  }
  loadShow();
  next.onclick = function(){
      active = active + 1 < items.length ? active + 1 : active;
      loadShow();
  }
  prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
  }
}

initializeSlider('.slider1', 'next1', 'prev1');
initializeSlider('.slider2', 'next2', 'prev2');
initializeSlider('.slider3', 'next3', 'prev3');

