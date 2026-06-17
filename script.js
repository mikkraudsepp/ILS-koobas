/* Koobas — interaktsioonid: reveal, päis, lightbox */
(function () {
  "use strict";

  /* ---------- Päis: taust kerimisel ---------- */
  var head = document.querySelector(".site-head");
  function onScroll() {
    if (head) head.classList.toggle("is-stuck", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal kerimisel ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Lightbox ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-full]"));
  var lb = document.getElementById("lightbox");
  if (lb && items.length) {
    var lbImg = lb.querySelector(".lb-img");
    var lbCap = lb.querySelector(".lb-cap");
    var btnClose = lb.querySelector(".lb-close");
    var btnPrev = lb.querySelector(".lb-prev");
    var btnNext = lb.querySelector(".lb-next");
    var current = 0;
    var lastFocus = null;

    function show(i) {
      current = (i + items.length) % items.length;
      var el = items[current];
      lbImg.src = el.getAttribute("data-full");
      lbImg.alt = el.getAttribute("alt") || el.getAttribute("data-cap") || "";
      lbCap.textContent = el.getAttribute("data-cap") || "";
    }
    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      lb.hidden = false;
      requestAnimationFrame(function () { lb.classList.add("is-open"); });
      document.body.style.overflow = "hidden";
      btnClose.focus();
    }
    function close() {
      lb.classList.remove("is-open");
      document.body.style.overflow = "";
      setTimeout(function () { lb.hidden = true; lbImg.src = ""; }, 280);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    items.forEach(function (el, i) {
      el.addEventListener("click", function () { open(i); });
    });
    btnClose.addEventListener("click", close);
    btnPrev.addEventListener("click", function () { show(current - 1); });
    btnNext.addEventListener("click", function () { show(current + 1); });
    lb.addEventListener("click", function (e) {
      if (e.target === lb) close();
    });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
    });
  }
})();
