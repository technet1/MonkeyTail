const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 30,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#video-container img", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadinganimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelectorAll(".child").addEventListener("mouseenter",function(){
  //     gsap.to("#cursor",{
  //         transform: `translate(-50%,-50%) scale(1)`
  //     })
  // })
  // document.querySelectorAll(".child").addEventListener("mouseleave",function(){
  //     gsap.to("#cursor",{
  //         transform: `translate(-50%,-50%) scale(0)`
  //     })
  // })
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: `translate(-50%,-50%) scale(1)`,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: `translate(-50%,-50%) scale(0)`,
      });
    });
  });
}
cursorAnimation();
