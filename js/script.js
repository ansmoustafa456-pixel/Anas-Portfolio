
// Select the navigation menu
const navLinks = document.querySelector(".nav-links");

// Select all navigation links
const links = document.querySelectorAll(".nav-links a");

// Create a mobile menu button
const menuButton = document.createElement("button");

menuButton.textContent = "☰";
menuButton.className = "menu-button";

document.querySelector(".navbar").prepend(menuButton);

// Open and close the menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

// Close the menu after clicking a link
links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
