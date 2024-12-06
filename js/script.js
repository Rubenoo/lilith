document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  const handleHamburgerClick = () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  };

  const handleOutsideClick = (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  };

  hamburger.addEventListener("click", handleHamburgerClick);
  document.addEventListener("click", handleOutsideClick);

  // Cleanup function
  return () => {
    hamburger.removeEventListener("click", handleHamburgerClick);
    document.removeEventListener("click", handleOutsideClick);
  };
});
