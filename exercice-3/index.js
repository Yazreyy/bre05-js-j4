let texte = document.querySelector("#text");
let buttonmasquer = document.querySelector("#hide");
let buttonmontrer = document.querySelector("#show");

buttonmasquer.addEventListener ("click" , (event) =>{
    texte.style.display = "none";
})

buttonmontrer.addEventListener("click" , (event) =>{
    texte.style.display = "block";
})