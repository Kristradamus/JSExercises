"use strict"

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btnClose");
const btnOpen = document.querySelectorAll(".btnOpen");

const hideElements = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

const showElements = function(element){
    const btnNum = parseInt(element);
    console.log(`Button ${btnNum + 1} clicked!`);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for (let i = 0; i < btnOpen.length; i++){
    btnOpen[i].addEventListener("click", () => showElements(i))
}

document.querySelector(".btnClose").addEventListener("click", hideElements)
document.querySelector(".overlay").addEventListener("click", hideElements)
document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        hideElements();
    }
})
