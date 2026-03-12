/* --- 1. MOBILE MENU TOGGLE --- */
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  // We make sure this matches our CSS width (200px or 250px)
  navLinks.style.right = "-250px";
}

/* --- 2. CONTACT FORM ALERT (Direct Method) --- */
function sendMessage(event) {
  // 1. Stop page reload
  event.preventDefault();

  // 2. Show Alert
  alert(
    "Thank you! Your booking request has been received. We will contact you shortly."
  );

  // 3. Clear Form
  document.getElementById("contactForm").reset();
}

/* --- 3. CLOSE MENU ON OUTSIDE CLICK --- */
document.addEventListener("click", function (event) {
  var navLinks = document.getElementById("navLinks");
  var menuIcon = document.querySelector(".menu-icon");

  // If the sidebar is open...
  if (navLinks.style.right === "0px" || navLinks.style.right === "0") {
    // AND the click was NOT inside the sidebar...
    // AND the click was NOT on the hamburger icon...
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
      hideMenu();
    }
  }
});