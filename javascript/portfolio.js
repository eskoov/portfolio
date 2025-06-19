function showProjects(category) {
    document.getElementById('dev-projects').style.display = 'none';
    document.getElementById('graphisme-projects').style.display = 'none';
    document.getElementById('audiovisuel-projects').style.display = 'none';
    
    document.getElementById(category).style.display = 'block';
}

function toggleProjectDetails(element) {
    let description = element.querySelector('.project-description');
    let video = element.querySelector('.project-video');

    if (description.style.display === 'block') {
        description.style.display = 'none';
        if (video) {
            video.style.display = 'none'; 
            video.pause(); // Vérifie d'abord si 'video' existe
        }
    } else {
        description.style.display = 'block';
        if (video) {
            video.style.display = 'block';
            video.play();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showProjects('dev-projects');
});

document.addEventListener("DOMContentLoaded", function() {
const buttons = document.querySelectorAll(".btn-group .btn");

function activateButton(activeButton) {
    buttons.forEach(button => {
        if (button === activeButton) {
            button.style.backgroundColor = "#007BFF";
            button.style.color = "white";
        } else {
            button.style.backgroundColor = "#ADD8E6";
            button.style.color = "black";
        }
    });
}
document.getElementById("scrollToTop").addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.getElementById("header-container");
    const headerHeight = 100; // Ajuste selon la hauteur de ton header

    if (target) {
        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: "smooth"
        });
    }
});




    // Activer "Dev" par défaut
    const defaultButton = document.querySelector(".btn-group .btn:nth-child(1)");
    activateButton(defaultButton);

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            activateButton(this);
        });
    });
});