// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  const icon = navToggle.querySelector("i");
  icon.classList.toggle("fa-bars", !mobileMenu.classList.contains("show"));
  icon.classList.toggle("fa-xmark", mobileMenu.classList.contains("show"));
});

// Sticky mobile menu on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navbarBottom = navbar.offsetTop + navbar.offsetHeight;
  mobileMenu?.classList.toggle("sticky-menu", window.scrollY > navbarBottom);
});

// Slider
const sliderContainer = document.querySelector(".slider");
const fallbackImages = [
  "slider-images/PIC_9608.jpg",
  "slider-images/PIC_9613.jpg",
  "slider-images/DL4A5463.jpg",
  "slider-images/DL4A5006.jpg",
  "slider-images/DL4A4637.jpg",
  "slider-images/DL4A3795.jpg",
  "slider-images/089A9122.jpg",
  "slider-images/089A1779.jpg",
  "slider-images/_Q9A8393.jpg",
  "slider-images/_Q9A7481.jpg",
  "slider-images/_Q9A7262.jpg",
  "slider-images/_Q9A6951.jpg",
  "slider-images/PIC_9254.jpg",
  "slider-images/PIC_9257.jpg",
  "slider-images/PIC_9468.jpg",
  "slider-images/PIC_9473.jpg",
];

let loadedIndexes = new Set();

function createInitialSlides(images) {
  const slidesHTML = images
    .slice(0, 2)
    .map(
      (src, index) => `
    <div class="slide ${
      index === 0 ? "active" : ""
    }" style="background-image: url('${src}')"></div>
  `
    )
    .join("");
  sliderContainer.innerHTML = slidesHTML;
  loadedIndexes.add(0);
  loadedIndexes.add(1);
  setupSlider(images);
}

function injectSlide(index) {
  if (loadedIndexes.has(index)) return;
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.style.backgroundImage = `url('${fallbackImages[index]}')`;
  sliderContainer.appendChild(slide);
  loadedIndexes.add(index);
}

function setupSlider(images) {
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let current = 0;

  const showSlide = (index) => {
    const allSlides = document.querySelectorAll(".slide");
    allSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    injectSlide((index + 1) % images.length); // preload next
  };

  function nextSlide() {
    current = (current + 1) % images.length;
    injectSlide(current);
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    injectSlide(current);
    showSlide(current);
  }

  nextBtn?.addEventListener("click", nextSlide);
  prevBtn?.addEventListener("click", prevSlide);
  setInterval(nextSlide, 5000); // Auto-slide
}

createInitialSlides(fallbackImages);

// Carousel thumbnails
const carouselTrack = document.querySelector(".carousel-track");
fallbackImages.forEach((image) => {
  const img = document.createElement("img");
  img.src = image;
  img.alt = "HOTR Slide";
  img.classList.add("desktop-banner");
  carouselTrack.appendChild(img);
});

let currentIndex = 0;
const updateCarousel = () => {
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
};

document.querySelector(".carousel-btn.left")?.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + fallbackImages.length) % fallbackImages.length;
  updateCarousel();
});

document.querySelector(".carousel-btn.right")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % fallbackImages.length;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % fallbackImages.length;
  updateCarousel();
}, 5000);

// Give overlay logic
const giveOverlay = document.getElementById("giveOverlay");
const closeOverlay = document.getElementById("closeOverlay");

document
  .querySelectorAll(".fa-circle-dollar-to-slot, .menu-block a, .nav-menu li a")
  .forEach((el) => {
    el.addEventListener("click", (e) => {
      const isGive =
        el.textContent.trim().toLowerCase() === "give" ||
        el.classList.contains("fa-circle-dollar-to-slot");
      if (isGive) {
        e.preventDefault();
        giveOverlay.classList.add("active");
      }
    });
  });

closeOverlay?.addEventListener("click", () =>
  giveOverlay.classList.remove("active")
);
giveOverlay?.addEventListener("click", (e) => {
  if (e.target === giveOverlay) giveOverlay.classList.remove("active");
});

// Copy to clipboard
document.querySelectorAll(".copy-text").forEach((copyEl) => {
  copyEl.addEventListener("click", () => {
    const text = copyEl.getAttribute("data-copy");
    navigator.clipboard.writeText(text).then(() => {
      copyEl.innerHTML = `${text} <i class="fa-solid fa-check"></i>`;
      setTimeout(() => {
        copyEl.innerHTML = `${text} <i class="fa-regular fa-copy"></i>`;
      }, 2000);
    });
  });
});

// Confetti (3-day limit)
const confettiKey = "hotr_confetti_data";

function shouldFireConfetti() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const data = JSON.parse(localStorage.getItem(confettiKey)) || {};
  const lastDate = data.lastDate;
  const count = data.count || 0;
  const lastTrigger = new Date(data.lastTriggerTime || 0);
  const threeDays = 3 * 24 * 60 * 60 * 1000;
  return now - lastTrigger > threeDays || lastDate !== today || count < 3;
}

function updateConfettiData() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const data = JSON.parse(localStorage.getItem(confettiKey)) || {};
  data.lastDate = today;
  data.count = data.lastDate === today ? (data.count || 0) + 1 : 1;
  data.lastTriggerTime = now.toISOString();
  localStorage.setItem(confettiKey, JSON.stringify(data));
}

function launchConfetti() {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  script.onload = () =>
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  document.body.appendChild(script);
}

if (shouldFireConfetti()) {
  updateConfettiData();
  launchConfetti();
}

const eventsContainer = document.querySelector(".events-container");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

function updateArrowsVisibility() {
  const scrollLeft = eventsContainer.scrollLeft;
  const scrollWidth = eventsContainer.scrollWidth;
  const clientWidth = eventsContainer.clientWidth;

  // Check if we need to show left arrow
  if (scrollLeft > 5) {
    scrollLeftBtn.style.opacity = "1";
    scrollLeftBtn.style.pointerEvents = "auto";
  } else {
    scrollLeftBtn.style.opacity = "0";
    scrollLeftBtn.style.pointerEvents = "none";
  }

  // Check if we need to show right arrow
  if (scrollLeft + clientWidth < scrollWidth - 5) {
    scrollRightBtn.style.opacity = "1";
    scrollRightBtn.style.pointerEvents = "auto";
  } else {
    scrollRightBtn.style.opacity = "0";
    scrollRightBtn.style.pointerEvents = "none";
  }
}

scrollLeftBtn.addEventListener("click", () => {
  eventsContainer.scrollBy({ left: -300, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  eventsContainer.scrollBy({ left: 300, behavior: "smooth" });
});

eventsContainer.addEventListener("scroll", updateArrowsVisibility);
window.addEventListener("resize", updateArrowsVisibility);
window.addEventListener("load", updateArrowsVisibility);
