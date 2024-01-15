document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll(".slider img").length;

  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    const translateValue = -index * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Event listeners for manual navigation
  document.getElementById("prevButton").addEventListener("click", prevSlide);
  document.getElementById("nextButton").addEventListener("click", nextSlide);

  setInterval(nextSlide, 3000); // Auto slide every 3 seconds
});
