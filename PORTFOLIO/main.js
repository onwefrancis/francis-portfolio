/* Onwe Francis Chiemerie — portfolio interactions (vanilla, no deps) */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* top bar border on scroll */
  var top = document.querySelector(".top");
  var onScroll = function () { top.classList.toggle("scrolled", window.scrollY > 12); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* spotlight follows the pointer */
  var spot = document.querySelector(".spot");
  if (spot && !reduce) {
    window.addEventListener("pointermove", function (e) {
      spot.style.setProperty("--mx", e.clientX + "px");
      spot.style.setProperty("--my", e.clientY + "px");
    }, { passive: true });
  }

  /* marquee: duplicate track so the -50% loop is seamless */
  var track = document.getElementById("marq");
  if (track) track.innerHTML += track.innerHTML;

  /* typewriter rotation */
  var words = ["regulatory systems.", "honest AI tools.", "clear technical prose.", "dashboards people trust.", "print-perfect documents."];
  var el = document.getElementById("typed");
  if (el && !reduce) {
    var wi = 0, ci = words[0].length, deleting = false;
    (function tick() {
      var w = words[wi];
      ci += deleting ? -1 : 1;
      el.textContent = w.slice(0, ci);
      var delay = deleting ? 34 : 68;
      if (!deleting && ci === w.length) { deleting = true; delay = 2100; }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 320; }
      setTimeout(tick, delay);
    })();
  }

  /* reveal on scroll */
  var rvs = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.14 });
    rvs.forEach(function (n) { io.observe(n); });
  } else {
    rvs.forEach(function (n) { n.classList.add("in"); });
  }

  /* count-up numbers when they enter the viewport */
  var counters = document.querySelectorAll("[data-count]");
  var runCount = function (n) {
    var target = parseInt(n.getAttribute("data-count"), 10) || 0;
    var suffix = n.getAttribute("data-suffix") || "";
    if (reduce) { n.textContent = target + suffix; return; }
    var t0 = null, dur = 1400;
    var step = function (t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      n.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { runCount(e.target); io2.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (n) { io2.observe(n); });
  } else {
    counters.forEach(runCount);
  }
})();
