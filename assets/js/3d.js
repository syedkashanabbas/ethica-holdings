document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".section-heading");
  const glassWrapper = document.querySelector(".spline-glass");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          glassWrapper.classList.add("glass"); // Show overlay
          heading.classList.add("animate");    // Show heading
        }, 6000); // Delay before showing
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector("#three-d-section"));
});