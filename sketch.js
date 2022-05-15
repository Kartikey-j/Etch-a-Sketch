
function generateDiv(){
    for (let i=0; i<256; i++){
container.innerHTML += `<div class="inside-container"></div>`
}
}

generateDiv()

const changeBlack = document.querySelector("div")

changeBlack.addEventListener("mouseover" , function(event){
    event.target.classList.replace("inside-container", "inside-container-after" )
})
