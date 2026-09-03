(function () {
  var body = document.body;
  var page = body.getAttribute("data-page") || "";
  var path = window.location.pathname || "";
  var inDocs = path.indexOf("/docs/") !== -1;
  var navToggle = document.querySelector("[data-nav-toggle]");
  var sidebarToggle = document.querySelector("[data-sidebar-toggle]");
  var backdrop = document.querySelector("[data-sidebar-backdrop]");
  var topPages = ["home", "download", "installation", "sources", "tweaks", "faq"];

  document.querySelectorAll("[data-nav]").forEach(function (link) {
    var key = link.getAttribute("data-nav");
    if (topPages.indexOf(key) !== -1 && key === page) {
      link.classList.add("is-active");
    } else if (key === "docs" && inDocs) {
      link.classList.add("is-active");
    }
  });

  document.querySelectorAll(".docs-nav a[data-doc]").forEach(function (link) {
    var doc = link.getAttribute("data-doc");
    var match =
      doc === page ||
      (page === "docs-installation" && doc === "installation") ||
      (page === "docs-faq" && doc === "faq");
    if (match) {
      link.classList.add("is-active");
    }
  });

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      body.classList.toggle("nav-open");
      body.classList.remove("sidebar-open");
    });
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      body.classList.toggle("sidebar-open");
      body.classList.remove("nav-open");
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", function () {
      body.classList.remove("sidebar-open");
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      body.classList.remove("nav-open", "sidebar-open");
    }
  });
})();
