// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const body = document.body;
const title = document.createElement('h1');
title.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(title);

// Adicione a tag main com a classe main-content como filho da tag body;
const mainTag = document.createElement('main');
mainTag.className = 'main-content';
body.appendChild(mainTag);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centerSection = document.createElement('section');
centerSection.className = 'center-content';
mainTag.appendChild(centerSection);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const centerParagraph = document.createElement('p');
centerParagraph.innerText = 'Algum texto no parágrafo da centerSection';
centerSection.appendChild(centerParagraph);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainTag.appendChild(rightSection);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftSection = document.createElement('section');
leftSection.className = 'left-content';
mainTag.appendChild(leftSection);

// Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
rightSection.appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
const oneToTenNumbers = ['um','dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const unorderedList = document.createElement('ul');
leftSection.appendChild(unorderedList);

for(let index = 0; index < oneToTenNumbers.length; index += 1) {
  const listItem = document.createElement('li');
  listItem.innerText = oneToTenNumbers[index];

  unorderedList.appendChild(listItem);
}

// Adicione 3 tags h3, todas filhas do main criado no passo 2.
const h3Title1 = document.createElement('h3');
const h3Title2 = document.createElement('h3');
const h3Title3 = document.createElement('h3');

mainTag.append(h3Title1, h3Title2, h3Title3);
