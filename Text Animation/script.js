function BreakTheText(){
    var heading=document.querySelector("h1")
var headingcontent = heading.textContent;
var stippedValue=headingcontent.split("")

var halfValue=stippedValue.length/2;
console.log(halfValue);

var clutter="";

stippedValue.forEach(function(elem,idx){
    if(idx<halfValue){
clutter += `<span class='ar'>${elem}</span>`
    }else{
        clutter += `<span class='br'>${elem}</span>`
    }

})

console.log(clutter)
heading.innerHTML=clutter
}
BreakTheText()

gsap.from("h1 .ar",{
    y:100,
    color:"red",
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15,
   

})
gsap.from("h1 .br",{
    y:100,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.15,
   

})