const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


// close when nav link is click
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click())
})

/* // Method 1:

menuOpenButton.addEventListener("click", () => {
  // Toggle the show-mobile-menu class to body
  document.body.classList.add("show-mobile-menu");
  menuOpenButton.style.display = "none";
  menuCloseButton.style.display = "Block";
});
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
  menuOpenButton.style.display = "block";
  menuCloseButton.style.display = "none";
}); */

/* // Method 2: Video Method

menuOpenButton.addEventListener("click", () => {
  // Toggle the show-mobile-menu class to body
  document.body.classList.toggle("show-mobile-menu");
});
  // ReCalled the click of menuOpenButton
menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
}); */

// Method 3: In which there is only the menuOpenButton the menuCloseButton will be comment out in html.

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
  menuOpenButton.classList.toggle("fa-times");
  menuOpenButton.classList.toggle("fa-bars");
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }

  }

});

