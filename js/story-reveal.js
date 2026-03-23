document.addEventListener("DOMContentLoaded", function () {
  var revealItems = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right",
  );

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
});
