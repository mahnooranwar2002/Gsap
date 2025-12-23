var main =document.querySelector(".main");
var cursor =document.querySelector(".cursor");
var boxDiv=document.querySelector(".box")

// for mouse move
main.addEventListener("mousemove",function(debts){
  gsap.to(cursor,{
    x:debts.x,
    y:debts.y,
    ease: "back.out(1.7)",
    duration:1
  })

})

// for picture mouse move
boxDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:4
    })
})
boxDiv.addEventListener("mouseleave",function(){
      cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1
    })
})