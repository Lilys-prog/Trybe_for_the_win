import { nanoid } from 'nanoid';
import copy from 'clipboard-copy'
import Swal from 'sweetalert2';
import './style.css'
const passwordContainer = document.getElementById('senha');
const btnSenha = document.getElementById('btn-senha');

const passwordGenerator = () => {
  passwordContainer.innerText = nanoid();  
};

const copyPassword = (event) => {
  let copiedPassword = copy(event.target.innerText);
  Swal.fire({
    title: "Good job!",
    text: "Senha copiada!",
    icon: "success"
  });
}

btnSenha.addEventListener('click', passwordGenerator);
passwordContainer.addEventListener('click', copyPassword);