const projectData = [
    { title: "Strategic Overview", desc: "Detailed breakdown of our 2026 tech goals." },
    // Add info for all slides...
];

const gallery = document.getElementById('gallery');

// Generate 15 Project Slides
for (let i = 0; i < 14; i++) {
    const data = projectData[i] || { title: `Technical Slide ${i+1}`, desc: "Click image to view full presentation details." };
    gallery.innerHTML += `
        <div class="glass-card animate__animated animate__fadeInUp" onclick="openFullImage('images/${i}.jpg', '${data.title}', '${data.desc}')">
            <img src="images/${i}.jpg" alt="Slide ${i}">
            <div class="card-label">${data.title}</div>
        </div>
    `;
}

// Add Thank You Card at the end
gallery.innerHTML += `
    <div class="glass-card thank-you-card animate__animated animate__pulse" onclick="openFullImage('images/thankyou.jpg', 'Conclusion', 'Thank you for your time!')">
        <img src="images/14.jpg" alt="Thank You">
        <div class="card-label">End of Presentation</div>
    </div>
`;

function openFullImage(src, title, desc) {
    document.getElementById('full-res-img').src = src;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('details-modal').style.display = "block";
}

function closeModal() {
    document.getElementById('details-modal').style.display = "none";
}

// toggle bar

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-list');

// Toggle Mobile Menu
menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    
    // Burger Icon Animation (Optional)
    menu.classList.toggle('is-active');
});

// Link par click karte hi menu close ho jaye
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menuLinks.classList.remove('active');
}));