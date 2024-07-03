
const element = document.querySelector("#main");
element.remove()
console.log(element);


let newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");

newHeader.textContent = "Stephen Ombwodo is the champion"
