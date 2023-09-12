// Menu Toggle Functionality
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Smooth Scrolling for Anchor Links
const navLinks = document.querySelectorAll(".menu li a");

navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    const headerOffset = 100; // Adjust the offset if needed

    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Close the menu after clicking on a link (for mobile view)
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});




// slider page

const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll(".slider img");
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(++slideIndex);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

prevBtn.addEventListener("click", () => {
  showSlide(--slideIndex);
  stopAutoSlide();
});

nextBtn.addEventListener("click", () => {
  showSlide(++slideIndex);
  stopAutoSlide();
});

slider.addEventListener("click", () => {
  showSlide(++slideIndex);
  stopAutoSlide();
});

// Start auto slide when the page loads
startAutoSlide();


// Add event listener to all "Read More" buttons
const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const content = button.parentNode;
    content.classList.toggle("show-full-text");

    // Toggle the "Read more" and "Read less" text
    if (content.classList.contains("show-full-text")) {
      button.textContent = "Read less";
    } else {
      button.textContent = "Read more";
    }
  });
});
