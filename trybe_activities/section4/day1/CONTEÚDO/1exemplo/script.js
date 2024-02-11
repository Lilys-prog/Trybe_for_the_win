

const title = document.getElementById('page-title');
const summary = document.getElementById('first-paragraph');
const information = document.getElementById('second-paragraph');
const subtitle = document.getElementById('subtitle');
const subtitle2 = document.getElementsByTagName('h2')

title.innerText = 'Avatar';
summary.innerText = 'Tem um monte de gente azul em outro planeta e os humanos querem explorar um minério raro. Mas pra fazer isso eles precisam tirar os smurfs do caminho.'
subtitle.innerText = 'Principais Informações';
summary.style.fontStyle = 'italic';
information.innerHTML = 'Direção: Alec Baldwin <br><br>Roteiro: Eu';
subtitle.style.color = 'green';