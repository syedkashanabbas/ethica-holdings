gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap.to(".circle-bg", {
    scrollTrigger: {
      trigger: "#circleHero",
      start: "top top",
      end: "+=1000",
      scrub: 1,                 // smooth scroll lag
      pin: true,
      invalidateOnRefresh: true // recalc on resize/refresh
    },
    width: "200vmax",
    height: "200vmax",
    borderRadius: "50%",        // always stay circle
    ease: "power2.out"
  });

  // fix layout shift on reload
  ScrollTrigger.refresh();
});
