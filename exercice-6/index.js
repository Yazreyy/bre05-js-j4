let togglespan = document.querySelectorAll(" h2 span");
togglespan.forEach(span =>{
    
span.addEventListener("click" , () => {
        
    
        let titleElement = span.parentElement;
        
        
        let detailSection = titleElement.nextElementSibling; 

        
        if (detailSection) {
            
            

            
            if (detailSection.classList.contains('closed')) {
                
                detailSection.classList.remove('closed');
                detailSection.classList.add('open');
                
                
                span.textContent = '–'; 
            } else {
                
                detailSection.classList.remove('open');
                detailSection.classList.add('closed');
                
               
                span.textContent = '+';
            }
        }
    });
});