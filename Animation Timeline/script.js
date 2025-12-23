var sideNav = document.querySelector(".full");
var sideNavHeading = document.querySelectorAll(".heading");
var closebtn=document.querySelector("#close_icon");
var menu=document.querySelector("#menu");
var tl = gsap.timeline();

tl.to(sideNav,{
    right:0,
    duration:1
})
tl.from(sideNavHeading,{
    x:150,
    duration:0.7,
    stagger:0.4,
    opacity:0
})
tl.from(closebtn,{
    opacity:0
})
tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})
closebtn.addEventListener("click",function(){
    tl.reverse()
})