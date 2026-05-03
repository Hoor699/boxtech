document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.getElementById('slides-wrapper');
    const totalSlides = 15; // 0.jpg se 14.jpg tak

    for (let i = 0; i < totalSlides; i++) {
        const slideContainer = document.createElement('div');
        slideContainer.className = 'slide-box animate__animated animate__fadeIn';
        
        
        slideContainer.innerHTML = `<img src="images/${i}.jpg" alt="BoxTech Slide ${i}" loading="lazy">`;
        
        wrapper.appendChild(slideContainer);
    }
});