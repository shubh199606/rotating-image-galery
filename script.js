const imageContainer = document.querySelector(".image-container")
const prev1 = document.getElementById("prev")
const next2 = document.getElementById("next")
let timer;
let x = 0;
prev1.addEventListener("click",()=>{
x = x+45;
clearTimeout(timer)
updateGalery()
});
next2.addEventListener("click",()=>{
    x = x-45;
    clearTimeout(timer)
    updateGalery()
    });
function updateGalery(){
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
timer=  setTimeout(()=>{
x = x-45
clearTimeout(timer)
updateGalery()
        },3000)
    }
    updateGalery()