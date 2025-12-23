// gsap.to(".container", {
//   x: 1000,
//   duration: 3,
//   delay: 1,
//   backgroundColor:"red",
//   borderRadius:"50%",
//   repeat:-1,
//   yoyo:true
// });

// gsap.from("h1",{
//     opacity:0,
//     delay:1,
//     duration:2,
//     y:80,
//     stagger:1
// })
// var timelines=gsap.timeline();
// timelines.from("nav h2",{
//      opacity:0,
//     delay:0.5,
//     duration:2,
//     y:-80,
//     stagger:1 
// })
// timelines.from("nav h4",{
//      opacity:0,
//     delay:0.5,
//     duration:2,
//     y:-80,
//     stagger:1 
// })
// timelines.from("h3",{
//       opacity:0,
//     delay:0.5,
//     duration:2,
//     scale:0.2
// })

gsap.from(".page2 h2",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:".page2 h2",
        scoller:"body",
        markers:true,
        start:"top 50%"

    }
})
gsap.from(".page2 h3",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:".page2 h3",
        scoller:"body",
        markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:5

    }
})