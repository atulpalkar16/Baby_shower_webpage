"use strict";

// Countdown Timer Function
const countdown = () => {
  const now = new Date().getTime();
  const target = new Date("October 25, 2025 10:30:00").getTime();
  const diff = target - now;

  // Check if the event has already happened
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      '<p style="font-size: 2rem; font-weight: 600;">The celebration day is here! 🎉👶</p>';
    clearInterval(timer);
    return;
  }

  // Calculate time units
  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  // Update the countdown display
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

// Initialize countdown timer
const timer = setInterval(countdown, 1000);
countdown(); // Run immediately on page load

// Smooth scroll for anchor links (if any are added later)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll animation effects
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections for fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".showcase, .timing-section, .location-section, .gallery-section"
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
  });
});

// Add parallax effect to hero section (optional enhancement)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");

  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Console message for developers
console.log(
  "%c👶 Baby Shower Celebration 🎉",
  "font-size: 20px; color: #e78fb3; font-weight: bold;"
);
console.log(
  "%cWishing Priyanka all the best!",
  "font-size: 14px; color: #d97ca2;"
);
