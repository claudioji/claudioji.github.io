var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var delbtn = document.querySelectorAll("[value='delete']");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	let x = Math.floor((Math.random() * 1000) + 1);
	li.setAttribute("random",x);
	setEventListener(li,"click",toggleDone);
	btn.setAttribute("id",x);
	btn.setAttribute("value","delete");
	setEventListener(btn,"click",deleteItem);
	console.log(btn);
	ul.appendChild(li);
	ul.appendChild(btn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItem(event) {
	var random=event.target.getAttribute("id");
	var li = document.querySelector("[random='"+random+"']");
	li.remove();
	event.target.remove();
}

function toggleDone(event) {
	event.target.classList.toggle("done");
}

function setEventListener(element,event,call){
	element.addEventListener(event, call);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(var i=0;i<li.length;i++)
{
	setEventListener(li[i],"click",toggleDone);
}
for(var i=0;i<delbtn.length;i++)
{
	setEventListener(delbtn[i],"click",deleteItem);
}
