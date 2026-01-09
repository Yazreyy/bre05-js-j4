
const tabButtons = document.querySelectorAll('button')

tabButtons.forEach(button =>{
    button.addEventListener("click" , ()=>{
        

const AllContents = document.querySelectorAll("p");

AllContents.forEach(content =>{
    content.style.display = "none";
})


const buttonID = button.id;
const contentID = `${buttonID}-content`;
 
const targetContent = document.getElementById(contentID)

if(targetContent){
    targetContent.style.display = "block";
}
});
});
const firstButton = document.getElementById('tab-1');
if (firstButton) {
    firstButton.click();
}




