const input = document.querySelector(".text-area input");
const addBtn = document.querySelector(".text-area button");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", function(){
    if (input.value.length > 0) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
}); 

input.addEventListener("keypress", function(event){
    if (input.value.length > 0 && event.keyCode === 13) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
}); 