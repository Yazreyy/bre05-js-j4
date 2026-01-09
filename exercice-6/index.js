togglespan = document.querySelectorAll(" h2 span");
togglespan.forEach(span =>{
    span.addEventListener("click" , () => {
       let section = document.querySelector("section");
       
       section.classList.toggle("open");
       section.classList.toggle("closed");
    });
});