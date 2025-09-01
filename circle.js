gsap.registerPlugin(ScrollTrigger);

gsap.to(".circle-bg", {
  scrollTrigger: {
    trigger: "#circleHero",
    start: "top top",
    end: "+=1000",
    scrub: 1,   // 1s smoothing lag
    pin: true
  },
  width: "200vmax",
  height: "200vmax",
  borderRadius: "50%",
  ease: "power2.out"
});
