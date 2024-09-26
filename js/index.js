// nav dropdown menu
function dropdownToggle() {
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("active");
}

// hambuger menu
function hamburgerToggle() {
  var openNav = document.getElementById("openNav");
  var closeNav = document.getElementById("closeNav");
  var nav = document.getElementById("nav");

  openNav.classList.toggle("active");
  closeNav.classList.toggle("active");
  nav.classList.toggle("active");

  document.addEventListener("click", function (event) {
    var isClickInsideNav = nav.contains(event.target);
    var isClickInsideButton =
      openNav.contains(event.target) || closeNav.contains(event.target);

    if (!isClickInsideNav && !isClickInsideButton) {
      if (nav.classList.contains("active")) {
        openNav.classList.toggle("active");
        closeNav.classList.toggle("active");
        nav.classList.remove("active");
      }
    }
  });
}
