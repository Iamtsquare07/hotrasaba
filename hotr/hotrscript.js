// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  const icon = navToggle.querySelector("i");
  icon.classList.toggle("fa-bars", !mobileMenu.classList.contains("show"));
  icon.classList.toggle("fa-xmark", mobileMenu.classList.contains("show"));
});

navToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    navToggle.click();
  }
});

// Sticky mobile menu on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const navbarBottom = navbar.offsetTop + navbar.offsetHeight;
  navbar.style.backgroundColor = "rgba(238, 238, 238, 0.74)";
  mobileMenu?.classList.toggle("sticky-menu", window.scrollY > navbarBottom);
});

// --- SLIDER ---

const sliderContainer = document.querySelector(".slider");

// Fallback images
const fallbackImages = [
  "slider-images/PIC_9608.webp",
  "slider-images/PIC_9613.webp",
  "slider-images/DL4A5463.webp",
  "slider-images/DL4A5006.webp",
  "slider-images/DL4A4637.webp",
  "slider-images/DL4A3795.webp",
  "slider-images/089A9122.webp",
  "slider-images/089A1779.webp",
  "slider-images/_Q9A8393.webp",
  "slider-images/_Q9A7481.webp",
  "slider-images/_Q9A7262.webp",
  "slider-images/_Q9A6951.webp",
  "slider-images/PIC_9254.webp",
  "slider-images/PIC_9257.webp",
  "slider-images/PIC_9468.webp",
  "slider-images/PIC_9473.webp",
];

// Priority images (Shown first)
// These images will be shown first and will be loaded with higher priority
const priorityImages = [
  "slider-images/PIC_9257.webp",
  "slider-images/DL4A5463.webp",
  "slider-images/089A9122.webp",
];

// A weighted images array so priority ones appear more often
const weightedImages = [
  ...fallbackImages,
  ...priorityImages,
  ...priorityImages,
];

let loadedIndexes = new Set();

// Text and Link Data for Priority Images
const priorityImagesData = [
  {
    image: "slider-images/PIC_9257.webp",
    text: "Watch Our Special Service",
    link: "/featured-service",
  },
  {
    image: "slider-images/DL4A5463.webp",
    text: "Explore Our Latest Collection",
    link: "/collection",
  },
  {
    image: "slider-images/089A9122.webp",
    text: "Learn More About Us",
    link: "/about-us",
  },
];

// Initial slides
function createInitialSlides(images) {
  const slidesHTML =
    priorityImages
      .map(
        (src, index) => `
      <div class="slide ${
        index === 0 ? "active" : ""
      }" data-priority="true" style="background-image: url('${src}')"></div>
    `
      )
      .join("") +
    images
      .filter((src) => !priorityImages.includes(src))
      .slice(0, 2) // load two normal images after priorities
      .map(
        (src) => `
      <div class="slide" style="background-image: url('${src}')"></div>
    `
      )
      .join("");

  sliderContainer.innerHTML = slidesHTML;
  loadedIndexes.add(0);
  loadedIndexes.add(1);
  setupSlider(images);
}

const pendingSlides = new Set();

function injectSlide(index) {
  if (loadedIndexes.has(index) || pendingSlides.has(index)) return;
  pendingSlides.add(index);
  requestAnimationFrame(batchInjectSlides);
}

function batchInjectSlides() {
  if (pendingSlides.size === 0) return;

  const fragment = document.createDocumentFragment();

  pendingSlides.forEach((index) => {
    const src = weightedImages[index];
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (priorityImages.includes(src)) {
      slide.setAttribute("data-priority", "true");
    }
    slide.style.backgroundImage = `url('${src}')`;
    fragment.appendChild(slide);
    loadedIndexes.add(index);
  });

  sliderContainer.appendChild(fragment);
  pendingSlides.clear();
}

function setupSlider(images) {
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const specialButton = document.getElementById("specialButton"); // <-- Special button
  let current = 0;

  const showSlide = (index) => {
    const allSlides = document.querySelectorAll(".slider .slide");
    allSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    const activeSlide = allSlides[index];
    const isPriority = activeSlide?.getAttribute("data-priority") === "true";

    // Debugging log to see if the active slide has the correct data-priority attribute
    console.log(`Slide ${index} is priority: ${isPriority}`);

    // Logic to show or hide the button based on priority slide
    if (specialButton) {
      if (isPriority) {
        const priorityData = priorityImagesData[index];
        specialButton.textContent = priorityData.text;
        specialButton.onclick = () =>
          (window.location.href = priorityData.link);
        specialButton.style.display = "block";
      } else {
        specialButton.style.display = "none";
      }
    }

    // Load the next slide
    injectSlide((index + 1) % weightedImages.length);
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

createInitialSlides(weightedImages);

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

let confettiLoaded = false;
function launchConfetti() {
  if (confettiLoaded) {
    confetti({ particleCount: 350, spread: 140, origin: { y: 0.6 } });
    return;
  }
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  script.onload = () => {
    confettiLoaded = true;
    confetti({ particleCount: 350, spread: 140, origin: { y: 0.6 } });
  };
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

function debounce(fn, delay = 100) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}

eventsContainer?.addEventListener("scroll", debounce(updateArrowsVisibility));

window.addEventListener("resize", updateArrowsVisibility);
window.addEventListener("load", updateArrowsVisibility);

// Fading in elements on scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: 0.1, // 10% of section must be visible
    }
  );

  document.querySelectorAll(".fade-section").forEach((section) => {
    observer.observe(section);
  });
  const year = new Date().getFullYear();
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = year;
  }
});