// nav dropdown menu
function dropdownToggle() {
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("active");
}

// nav fixed
window.onscroll = function () {
  toggleFixedHeader();
};

function toggleFixedHeader() {
  const header = document.querySelector(".header");
  if (window.scrollY > 400) {
    header.classList.add("active");
  } else {
    if (window.scrollY == 0) {
      header.classList.remove("active");
    }
  }
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

// Why Acordion
document.addEventListener("DOMContentLoaded", function () {
  let initialized = false;

  function initializeAccordion() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1024 && !initialized) {
      var accordions = document.querySelectorAll(
        ".why .why-container .why-content .why-list .list-item .wrap-title"
      );

      accordions.forEach(function (accordion) {
        accordion.addEventListener("click", function () {
          this.classList.toggle("active");

          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      });

      initialized = true;
    } else if (screenWidth > 1024 && initialized) {
      var panels = document.querySelectorAll(
        ".why .why-container .why-content .why-list .list-item .panel"
      );

      panels.forEach(function (panel) {
        panel.style.display = "block";
      });

      initialized = false;
    }
  }

  initializeAccordion();

  window.addEventListener("resize", function () {
    initializeAccordion();
  });
});

// Faq Acordiones
const accordionBtns = document.querySelectorAll(".acordion-btn");

accordionBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const parentAccordion = button.closest(".faq-acordion");

    if (parentAccordion) {
      parentAccordion.classList.toggle("active");
    }
  });
});

// roadmap acordions
document
  .querySelectorAll(".roadmap .roadmap-table .table-body .item .item-head")
  .forEach((itemHead) => {
    itemHead.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");
    });
  });
