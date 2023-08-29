gsap;

var tl = gsap.timeline();

function time() {
  var a = 0; setInterval(function(){
    a = a + Math.floor(Math.random()*15)
    if(a<100){
      document.querySelector("#loader h1").
      innerHTML = a+ "%"
    }
    else{
      a = 100
      document.querySelector("#loader h1").
      innerHTML = a+"%"
    }
  }, 150)
}

time();

tl.to("#loader h1", {
  scale: 1.5,
  delay: 0.5,
  duration: 1,
  onStart:time()
});

tl.to("#loader", {
  top: "-100vh",
  delay: 0.5,
  duration: 1.5,
});

tl.from("#page1 #nav", {
  opacity: 0,
  delay: 0.1,
});

tl.from("#nav #nav-left , #nav #nav-right", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    //  markers:true,
    start: "top 0",
    end: "top -200%",
    scrub: 2,
    pin: true,
  },
});

t2.to("#page1 #hero h1", {
  transform: "translateX(-100%)",
  fontWeight: "100",
});

t2.to("#page1 video", {
  transform: "translateY(-200%)",
  width: "100%",
  left: "0",
});

gsap.from("#page2 #page2-right", {
  y: "500",
  duration: 0.2,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top -10%",
    scrub: 3,
    pin: true,
  },
});

// var t3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#page3",
//     scroller: "body",
//     markers: true,
//     start: "top 300",
//     end: "top 0",
//     scrub: 2,
//   },
// });

// t3.to("#page3 #img1", {
//   height: "650px",
// },"anim");

// t3.to("#page3 #img2", {
//   height: "650px",
// },"anim");

// t3.to("#page3 #img3", {
//   height: "650px",

// },"anim");

// t3.to("#page3 #img4", {
//   height: "650px",

// },"anim");

// t3.to("#page3 #img5", {
//   height: "650px",
// },"anim");

gsap.to("#page3 #img1", {
  height: "650px",
  scrollTrigger: {
    trigger: "#page3 #img1",
    scroller: "body",
    // markers: true,
    start: "top 45%",
    end: "top 20",
    scrub: 2,
    pine: true,
  },
});

gsap.to("#page3 #img2", {
  height: "650px",
  scrollTrigger: {
    trigger: "#page3 #img2",
    scroller: "body",
    // markers: true,
    start: "top -20%",
    end: "top -50%",
    scrub: 2,
    pine: true,
  },
});

gsap.to("#page3 #img3", {
  height: "650px",
  delay: 3,
  scrollTrigger: {
    trigger: "#page3 #img3",
    scroller: "body",
    // markers: true,
    start: "top -90%",
    end: "top -130%",
    scrub: 2,
    pine: true,
  },
});

gsap.to("#page3 #img4", {
  height: "650px",
  delay: 4,
  scrollTrigger: {
    trigger: "#page3 #img4",
    scroller: "body",
    // markers: true,
    start: "top -190%",
    end: "top -230%",
    scrub: 2,
    pine: true,
  },
});

gsap.to("#page3 #img5", {
  height: "650px",
  delay: 5,
  scrollTrigger: {
    trigger: "#page3 #img5",
    scroller: "body",
    // markers: true,
    start: "top -290%",
    end: "top 100",
    scrub: 2,
    pine: true,
  },
});

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    //  markers:true,
    start: "top -450%",
    end: "top -500%",
    scrub: 2,
    pin: true,
  },
});

t3.to(
  "#page3",
  {
    backgroundColor: "#000",
  },
  "eme"
);

t3.to(
  "#page3 .page3-part1 h1",
  {
    color: "#fff",
  },
  "eme"
);

t3.to(
  "#page3 #page3-part-2-1 h2",
  {
    color: "#fff",
  },
  "eme"
);

t3.to(
  "#page3-part-2-1 #arrow i",
  {
    color: "#fff",
  },
  "eme"
);

t3.to(
  "#page3 #page3-part-2-2 h1 ,.part-2-des p ,.part-2-button i",
  {
    color: "#fff",
  },
  "eme"
);

t3.to(
  ".part-2-button a",
  {
    color: "#fff",
  },
  "eme"
);

gsap.to("#page3 video", {
  transform: "translateY(-200%)",
  width: "100%",
  left: "0",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers: true,
    start: "top -550%",
    end: "top 0",
    scrub: 2,
    pin: true,
  },
});

var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    //  markers:true,
    start: "top -120%",
    end: "top 0",
    scrub: 2,
    pin: true,
  },
});

t4.to(
  "#page4",
  {
    backgroundColor: "#000",
  },
  "eme1"
);

t4.to(
  "#page4-part2 h1",
  {
    color: "#fff",
  },
  "eme1"
);

t4.to(
  "#page4-part3 h2",
  {
    color: "#fff",
  },
  "eme1"
);

t4.to(
  ".page4-part-3-button i",
  {
    color: "#fff",
  },
  "eme1"
);

t4.to(
  ".part-3-left h1",
  {
    color: "#fff",
  },
  "eme1"
);

t4.to(
  ".page4-part-3-button a",
  {
    color: "#fff",
  },
  "eme1"
);
