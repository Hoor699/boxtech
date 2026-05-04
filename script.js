document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.getElementById('slides-wrapper');
 
    const totalSlides = 16; 

    for (let i = 0; i < totalSlides; i++) {
        const slideContainer = document.createElement('div');
        slideContainer.className = 'slide-box animate__animated animate__fadeIn';
        
       
        const img = document.createElement('img');
        img.src = `images/${i}.jpg`; 
        img.alt = `Slide ${i}`;
        img.loading = "lazy";
        
       
        img.onerror = function() {
            this.style.display = 'none'; 
            console.log("Missing image: " + i + ".jpg");
        };

        slideContainer.appendChild(img);
        wrapper.appendChild(slideContainer);
    }
});