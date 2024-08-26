const searchContainer = document.querySelector(".search-container");
const searchIcon = document.querySelector(".search-icon");
const closeBtn = document.querySelector(".close-btn");
const iconMenuMobile = document.querySelector(".icon-menu-mobile");
const menuMobileLinks = document.querySelector(".menu-mobile-links");
const closeBtnMobile = document.querySelector(".close-btn-mobile");

searchIcon.addEventListener("click", () => {
  searchContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  searchContainer.classList.remove("active");
});

iconMenuMobile.addEventListener("click", () => {
  if (!menuMobileLinks.classList.contains("active")) {
    menuMobileLinks.classList.add("active");
    iconMenuMobile.classList.add("active");
  }
});

closeBtnMobile.addEventListener("click", () => {
  if (menuMobileLinks.classList.contains("active")) {
    menuMobileLinks.classList.remove("active");
    iconMenuMobile.classList.remove("active");
  }
});
