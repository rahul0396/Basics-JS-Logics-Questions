const btn = document.querySelectorAll(".btn");
const font=document.querySelector("#h1");
let size=20;
//addEventListener
btn[0].addEventListener("click",function clickhandler(){
    size=size+2;
    
    console.log(size);
    // console.log(size.vaule);
font.style.fontSize= size+'px';
 



// console.log(fontincrease.value);
console.log("clickkk");

})
btn[1].addEventListener("click",function clickhandler(){
    size=size-2;
    
    console.log(size);
    // console.log(size.vaule);
font.style.fontSize= size+'px';
 



// console.log(fontincrease.value);
console.log("clickkk");

})