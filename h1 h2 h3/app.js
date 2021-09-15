const input=document.querySelector("#input");
const h1=document.querySelector("#h1");
const h2=document.querySelector("#h2");
const h3=document.querySelector("#h3");
const output=document.querySelector("#output");

function h1btn(){
    var inputvalue=input.value;
    output.innerText=inputvalue;
    output.innerHTML='<h1>output</h1>';
}
h1.addEventListener("click",h1btn);