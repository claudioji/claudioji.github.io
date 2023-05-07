var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function inputValid() {
    return input.value.length > 0;
}

function addListAfterClick(){
    if(inputValid()){
        createListElement();
    }
}
function addListAfterKeypress(event){
    if(inputValid() && event.code.includes("Enter")){
        createListElement();
    }
}
button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);