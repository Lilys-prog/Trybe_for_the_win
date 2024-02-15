import { nanoid } from 'nanoid';
import copy from 'clipboard-copy'
import './style.css'
const passwordContainer = document.getElementById('senha');
const btnSenha = document.getElementById('btn-senha');

const passwordGenerator = () => {
  passwordContainer.innerText = nanoid();  
};

const copyPassword = (event) => {
  let copiedPassword = copy(event.target.innerText);
  alert('Senha Copiada!'); 
}

btnSenha.addEventListener('click', passwordGenerator);
passwordContainer.addEventListener('click', copyPassword);