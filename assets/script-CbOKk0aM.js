/* Hamburger Menu */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(
    ".nav-links a:not(.dropdown-toggle)",
  );
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  const handleHamburgerClick = () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  };

  const handleOutsideClick = (e) => {
    // Close navbar when clicking outside
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }

    // Close dropdown when clicking outside the dropdown
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  };

  const closeNavbar = () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  };

  // Handle dropdown toggle click for all screen sizes
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("active");
  };

  // Add click event listeners to regular nav links (excluding dropdown toggle)
  navLinksItems.forEach((link) => {
    link.addEventListener("click", closeNavbar);
  });

  // Add click event listener to dropdown toggle
  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", handleDropdownToggle);

    // Add click listeners to dropdown menu items
    const dropdownItems = dropdown.querySelectorAll(".dropdown-menu a");
    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => {
        closeNavbar(); // Close navbar
        dropdown.classList.remove("active"); // Close dropdown
      });
    });
  }

  hamburger.addEventListener("click", handleHamburgerClick);
  document.addEventListener("click", handleOutsideClick);

  // Add navigation functionality to buttons
  const setupButtonNavigation = () => {
    const managementButton = document.querySelector(".button-oranje-1");
    const mojoButton = document.querySelector(".button-groen-1");

    if (managementButton) {
      managementButton.addEventListener("click", () => {
        window.location.hash = "management";
      });
    }

    if (mojoButton) {
      mojoButton.addEventListener("click", () => {
        window.location.hash = "mojo";
      });
    }
  };

  // Initial setup for buttons
  setupButtonNavigation();
});

/* Hash router */
const routes = {
  "/": {
    template: () => import("../home.html?raw"),
    title: "Lilith Management & Mojo",
    description: "Lilith Management & Mojo",
  },
  mojo: {
    template: () => import("../mojo.html?raw"),
    title: "Lilith Mojo",
    description: "Lilith Mojo",
  },
  management: {
    template: () => import("../management.html?raw"),
    title: "Lilith Management",
    description: "Lilith Management",
  },
};

const locationHandler = async () => {
  const location = window.location.hash.replace("#", "") || "/";
  const route = routes[location] || routes["/"];
  const html = await route.template().then((m) => m.default);

  document.body.classList.remove("loaded");

  setTimeout(() => {
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", route.description);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.classList.add("loaded");

    // Set up button navigation after content is loaded
    setupButtonNavigation();
  }, 300);
};

// Function needs to be accessible outside the DOMContentLoaded scope
function setupButtonNavigation() {
  const managementButton = document.querySelector(".button-oranje-1");
  const mojoButton = document.querySelector(".button-groen-1");

  if (managementButton) {
    // Remove existing listeners to prevent duplicates
    const newManagementButton = managementButton.cloneNode(true);
    managementButton.parentNode.replaceChild(
      newManagementButton,
      managementButton,
    );
    newManagementButton.addEventListener("click", () => {
      window.location.hash = "management";
    });
  }

  if (mojoButton) {
    // Remove existing listeners to prevent duplicates
    const newMojoButton = mojoButton.cloneNode(true);
    mojoButton.parentNode.replaceChild(newMojoButton, mojoButton);
    newMojoButton.addEventListener("click", () => {
      window.location.hash = "mojo";
    });
  }
}

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
