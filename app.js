// Setup Navbar
const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navBarClose = document.getElementById("navbar-close");

// Show Nav Bar
navBtn.addEventListener("click", () => {
  navBar.classList.add("showNav");
});

// Remove Nav Bar
navBarClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
});

// Show Date
const yearDate = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
