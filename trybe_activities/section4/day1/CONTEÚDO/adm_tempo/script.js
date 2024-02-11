const body = document.getElementById('container');
const header = document.getElementById('header-container');
const emergencyDivs = document.querySelectorAll('.emergency-tasks div')
const emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyDivs = document.querySelectorAll('.no-emergency-tasks div')
const noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');
const footer = document.getElementById('footer-container');



body.style.textAlign = 'center';

header.style.backgroundColor = 'rgb(0, 176, 105)';

for(let index = 0; index < emergencyDivs.length; index += 1) {
  emergencyDivs[index].style.backgroundColor = 'rgb(255, 159, 132)';
}

for(let index = 0; index < emergencyTitles.length; index += 1) {
  emergencyTitles[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

for(let index = 0; index < noEmergencyDivs.length; index += 1) {
  noEmergencyDivs[index].style.backgroundColor = 'rgb(249, 219, 94)';
}

for(let index = 0; index < noEmergencyTitles.length; index += 1) {
  noEmergencyTitles[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

footer.style.backgroundColor = 'rgb(0, 53, 51)';
