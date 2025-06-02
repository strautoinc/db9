function toggleCarrierForm() {
    const modal = document.getElementById("carrierModal");
    modal.classList.toggle("show");
  }

function closeCarrierForm() {
    const modal = document.getElementById("carrierModal");
    modal.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
      sections.forEach((section) => {
          if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
              section.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();
});


  function toggleMenu() {
    const navLinks = document.querySelector(".nav-right");
    navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var scrollUpBtn = document.getElementById("scrollUpBtn");

  window.onscroll = function () {
      // Show or hide the button based on scroll position
      if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
          scrollUpBtn.classList.add("visible");
      } else {
          scrollUpBtn.classList.remove("visible");
      }
  };

  // Scroll to the top function
  function scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // Attach the scrollToTop function to the button click event
  scrollUpBtn.addEventListener("click", scrollToTop);
});

const header = document.getElementById("mainHeader");
const shrink = document.getElementsByClassName("shrink");

window.addEventListener("scroll", function () {
  const triggerPoint = shrink[0].offsetHeight / 5;

  if (window.scrollY > triggerPoint) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});


const openBtn = document.getElementById('open-quote-modal');
  const closeBtn = document.getElementById('close-quote-modal');
  const modal = document.getElementById('quote-modal');
  const overlay = document.getElementById('modal-overlay');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });