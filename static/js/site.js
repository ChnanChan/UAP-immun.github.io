(function () {
  "use strict";
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
})();
