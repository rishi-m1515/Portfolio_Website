import { electronicProjectsData, softwareProjectsData } from "./projectsData.js";

/*
scrolling - section 0 to header 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".section-0").style.padding = "20px";
    document.querySelector(".name-box-line1").style.opacity = "0";
    document.querySelector(".name-box-line2").style.display = "none";
    document.querySelector(".name").style.fontSize = "1.5em";
  } else {
    document.querySelector(".section-0").style.padding = "150px";
    document.querySelector(".name-box-line1").style.opacity = "1";
    document.querySelector(".name-box-line2").style.display = "block";
    document.querySelector(".name").style.fontSize = "5em";
  }
} */

window.onload = function() {
    document.querySelector('.name').classList.add('visible');
};

loadElectronicsProjects();

function loadElectronicsProjects() {
    let projectshtml = ``;
    electronicProjectsData.forEach(project => {
        projectshtml += `
            <div class="project-container ${project['id-name']}">
                <div class="project-text-container">
                    <div class="heading-container">
                        <h3>${project['title']}</h3>
                    </div>
                    <div class="paragraph-container">
                        <p>${project['description']}</p>
                    </div>
                </div>
                <div class="project-image-container">
                    <img src=${project['image']}>
                </div>
            </div>
        `;
        document.querySelector('.electronic-projects').innerHTML = projectshtml;
    });
}



loadSoftwareProjects();
function loadSoftwareProjects() {
    let projectshtml2 = ``;
    softwareProjectsData.forEach(project => {
        projectshtml2 += `
            <div class="project-container ${project['id-name']}">
                <div class="project-text-container">
                    <div class="heading-container">
                        <h3>${project['title']}</h3>
                    </div>
                    <div class="paragraph-container">
                        <p>${project['description']}</p>
                    </div>
                </div>
                <div class="project-image-container">
                    <img src=${project['image']}>
                </div>
            </div>
        `;
        document.querySelector('.software-projects').innerHTML = projectshtml2;
    });
}
