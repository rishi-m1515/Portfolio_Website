import { electronicProjectsData, softwareProjectsData } from "./data/projectsData.js";

window.onload = function() {
    document.querySelector('.name').classList.add('visible');
};

loadElectronicsProjects();
function loadElectronicsProjects() {
    let projectshtml = ``;
    electronicProjectsData.forEach(project => {
        projectshtml += `
            <a href="HTML_Files/${project['id-name']}.html" class="project-container ${project['id-name']}">
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
            </a>
        `;
        document.querySelector('.electronic-projects').innerHTML = projectshtml;
    });
}

loadSoftwareProjects();
function loadSoftwareProjects() {
    let projectshtml2 = ``;
    softwareProjectsData.forEach(project => {
        projectshtml2 += `
            <a href="HTML_Files/${project['id-name']}.html" class="project-container ${project['id-name']}">
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
            </a>
        `;
        document.querySelector('.software-projects').innerHTML = projectshtml2;
    });
}

let mybutton = document.querySelector('.home-button');
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

window.topFunction = topFunction;

function topFunction() {
  console.log("topfunc");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
