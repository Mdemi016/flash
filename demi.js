let h1 = document.getElementById("good")
console.log(h1)
h1.innerText = "Hey you"
let phone = document.getElementsByClassName(".phone")
console.log = (phone) 
let div = document.getElementsByTagName("");

for (let i = 0; i < div.length; i++) {
  div[i].innerHTML="New Value";
}
// let item = document.querySelector("#good")
for (let i = 0; i < div.length; i++) {
  div[i].innerHTML="Demilade";
}
// let items = document.querySelectorAll("#p")
console.log = (phone)

let abc=document.querySelector("#noise")
abc.style.color = "red"
abc.style.backgroundColor = "blue"
abc.style.fontSize = "25px"

let p=document.querySelector("p")
let btn = document.querySelector("button")
function change(){
  p.style.color = "red"
  p.style.backgroundColor = "blue"
  p.innerText = "you just click me"
}
btn.addEventListener("click", change)


let light=true;
let body= document.body;
function toggle(){
  if (light){
    body.style.backgroundColor="black";
    body.style.color="white";
    light=false;
  }
  else{
    body.style.backgroundColor="white";
    body.style.color="black";
    light=true;
  }
}
btn.addEventListener("click", toggle)